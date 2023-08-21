import axios from "axios"

async function handleLogin(event) {
    event.preventDefault()
    if (loginPassword.length >= 10 && loginEmail.length >= 3) {
        try {
            const loginData = {
                email: loginEmail,
                password: loginPassword
            }
            const response = await axios.post('https://l2423ek0yd.execute-api.us-east-1.amazonaws.com/api/login', { loginData })
            const token = response.data.token
            const decodedToken = jwt_decode(token)

            const { email, wins, total_guesses, correct_guesses, longest_streak } = decodedToken

            localStorage.setItem('email', email)
            localStorage.setItem('wins', wins)
            localStorage.setItem('totalGuesses', total_guesses)
            localStorage.setItem('correctGuesses', correct_guesses)
            localStorage.setItem('longestStreak', longest_streak)

            localStorage.setItem('token', token)
            setLoggedIn(true)
        } catch (error) {
            setLoginError(true)
            console.log(error)
            throw error
        }
    }
}

async function handleSubmit(event) {
    event.preventDefault()
    if (password === confirmPassword && password.length >= 10 && email.length >= 3) setIncorrectConfirmation(false)
    if (incorrectConfirmation) {
        try {
            const userData = {
                email: email,
                password: password,
                wins: wins,
                totalGuesses: totalGuesses,
                correctGuesses: correctGuesses,
                longestStreak: longestStreak
            }
            const response = await axios.post(' https://l2423ek0yd.execute-api.us-east-1.amazonaws.com/api/register', { userData })
            
            console.log('User registered successfully:', response.data)
            setRegistered(true)
            return response.data
          } catch (error) {
            setRegistrationError(true)
            setShowRegistrationError(error)
            console.error('An error occurred while registering the user:', error)
            throw error
          }
        }
}

export { handleSubmit, handleLogin }