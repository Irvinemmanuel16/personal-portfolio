const path = require('path')
const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000;

if(process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'))
  app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
}

app.listen(PORT, () => console.log(`Runnig on port ${PORT}`))
