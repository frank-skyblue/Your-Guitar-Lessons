import express, {Express, Router} from 'express';
import cors from 'cors';

const corsConfig = {
    origin: [process.env.REACT_FRONTEND_URL!, process.env.REACT_FRONTEND_URL_WWW!],
    credentials: true
}

const app: Express = express()
const router: Router = express.Router()
const port = 3000

app.use(cors(corsConfig))

router.get('/hello', (req, res) => {
    res.send('Hello from the backend!')
})

// app.use(cors(corsConfig))
app.use('/api', router)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})