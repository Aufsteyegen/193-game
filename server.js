import express from 'express'
import cors from 'cors'
import bcrypt from 'bcrypt'

const app = express()

app.use(cors())
app.use(express.json())

app.post('/register', async (req, res) => {
    try {
        const { userData } = req.body
        const { email, password, wins, totalGuesses, correctGuesses, 
                bestWinTime } = userData
        async function hashPassword(password) {
            const saltRounds = 10
            const salt = await bcrypt.genSalt(saltRounds)
            const hashedPassword = await bcrypt.hash(password, salt)
            return [hashedPassword, salt]
        }
        const hashedPasswordandSalt = hashPassword(password)
        await pool.query(
        "INSERT INTO users (email, password, salt, wins, total_guesses, correct_guesses, best_win_time) VALUES ($1, $2, $3, $4, $5, $6, $7)",
        [email, hashedPasswordandSalt[0], hashedPasswordandSalt[1], wins, 
         totalGuesses, correctGuesses, bestWinTime])
        res.send("Registration successful.")
    } catch (err) {
        console.error(err.message)
    }
})

app.get('/', (req, res) => {
  res.send('Hello, world!')
})

app.listen(3000, () => {
  console.log('Server is running on port 3000')
})
