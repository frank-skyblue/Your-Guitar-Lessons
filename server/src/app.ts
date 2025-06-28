import express, { Express, Router } from 'express';
import cors from 'cors';
import { login, logout } from './controllers/authenticationController';

const corsConfig = {
    origin: [
        'http://localhost:3000', // React development server
        'http://localhost:3001', // Alternative React port
        process.env.REACT_FRONTEND_URL,
        process.env.REACT_FRONTEND_URL_WWW
    ].filter((url): url is string => !!url), // Type guard to ensure only strings
    credentials: true
}

const app: Express = express()
const router: Router = express.Router()
const port = 8080

app.use(cors(corsConfig))
app.use(express.json())

router.get('/hello', (req, res) => {
    res.send('Hello from the backend!')
})

// Authentication routes
router.post('/login', login)
router.post('/logout', logout)

// app.use(cors(corsConfig))
app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})