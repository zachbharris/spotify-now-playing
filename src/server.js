import express from 'express'

import { spotify } from './modules'

const app = express()
const PORT = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('hello world')
})

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`)
})

export default app
