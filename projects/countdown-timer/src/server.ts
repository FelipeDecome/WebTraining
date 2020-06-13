import express from 'express'
import cors from 'cors'
import routes from './Routes/routes'

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())
app.use(routes)

app.get('/', (req, res) => {


    res.send('Hello World!')
})

app.listen(port, err => {

    if (err) {
        return console.log(err)
    }

    return console.log(`server is listening on ${port}`)
})
