import express from 'express'
import cors from 'cors'
import routes from './Routes/routes'

const app = express()
const port = 3333

app.use(cors({
    origin: '192.168.0.105',
}))
app.use(express.json())
app.use(routes)

app.listen(port, err => {

    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})
