const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.send('Welcome to my API build with Express ')
})

app.listen(PORT, ()=>{
    console.log(`Server listen Successfully on http://localhost:${PORT}`)
})