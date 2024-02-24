import express from 'express'
import postRouter from './routes/post.routes.js'
import stepRouter from './routes/step.routes.js'
import comentRouter from './routes/coment.routes.js'

const app = express()

//middlewares
app.use(express.json())
app.use(postRouter)
app.use(stepRouter)
app.use(comentRouter)

export default app