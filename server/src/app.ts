import express, { Express } from 'express';
import cors from 'cors';
import { login, logout, register } from './controllers/authenticationController';
import { connectToDatabase } from './services/mongooseService';

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
const router = express.Router()
const port = 8080

app.use(cors(corsConfig))
app.use(express.json())

router.get('/hello', (req, res) => {
    res.send('Hello from the backend!')
})

// Authentication routes
router.post('/login', login)
router.post('/logout', logout)
router.post('/register', register)

app.use('/api', router)

const start = async () => {
    try {
        await connectToDatabase();
        app.listen(port, () => {
            console.log(`Server started on port ${port}`);
        });
    } catch (error) {
        console.error(error);
        process.exit(1);
    }
};

start();