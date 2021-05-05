const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')
// require('dotenv').config()

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
// 	console.log(req.method, req.path)
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
	console.log('Server is up on port ' + port)
})

