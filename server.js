import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'
import pool from './db.js'
import jwt from 'jsonwebtoken'
  
const secretKey = process.env.SECRET_KEY

const app = express()

app.use(cors())
app.use(express.json())

app.post('/register', async (req, res) => {
    try {
        const { userData } = req.body
        const { email, password, wins, totalGuesses, correctGuesses, 
                longestStreak } = userData
        const existingUser = await pool.query("SELECT * FROM users WHERE email = $1", [email])
        if (existingUser.rows.length > 0) {
            return res.status(409).send("Email already exists.")
        }
        async function hashPassword(password) {
            const saltRounds = 10
            const salt = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, salt)
            return [hashedPassword, salt]
        }
        const hashedPasswordandSalt = await hashPassword(password)
        await pool.query(
        "INSERT INTO users (email, password, salt, wins, total_guesses, correct_guesses, longest_streak) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [email, hashedPasswordandSalt[0], hashedPasswordandSalt[1], wins, 
         totalGuesses, correctGuesses, longestStreak])
        res.send("Registration successful.")
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/login', async (req, res) => {
    try {
        const { email, password,  } = req.body
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email])
        if (existingUser.rows.length === 0) {
            return res.status(401).send({ message: 'Email not found.' })
        }
        const { password: hashedPassword, wins, total_guesses,
                correct_guesses, longest_streak } = existingUser.rows[0]
        const isPasswordValid = await bcrypt.compare(password, hashedPassword)
        if (!isPasswordValid) {
            return res.status(401).send({ message: 'Wrong password.' })
        }
        const token = jwt.sign({ email, wins, total_guesses, correct_guesses,
                                 longest_streak }, secretKey, { expiresIn: '7d' })
        res.json({ token })
    } catch (error) {
        console.log(error)
    }
})

function verifyToken(req, res, next) {
    const token = req.header('Authorization')
    if (!token) {
      return res.status(401).send('Access denied. No token provided.')
    }
  
    try {
      const decoded = jwt.verify(token, secretKey)
      req.user = decoded
      next()
    } catch (error) {
      return res.status(401).send('Invalid token.')
    }
}

app.get('/login-retrieve', verifyToken, (req, res) => {
    res.send('Protected route accessed successfully!')
})

app.put('/update', async (req, res) => {
    const { userData } = req.body
    const { email, wins, totalGuesses, correctGuesses, 
            longestStreak } = userData
    try {
        const query = `
            UPDATE users
            SET
            wins = $1,
            total_guesses = $2,
            correct_guesses = $3,
            longest_streak = $4
            WHERE
            email = $5;
        `;
            const values = [wins, totalGuesses, correctGuesses, longestStreak, email]
        
            await pool.query(query, values)
            console.log('Row updated successfully')
        
            res.status(200).json({ message: 'Row updated successfully' })
        } catch (error) {
            console.error('Error updating row:', error)
            res.status(500).json({ error: 'An error occurred while updating the row' })
        }
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
