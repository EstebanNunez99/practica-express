const express = require('express')

const app = express()

const PORT = process.env.PORT || 4000

app.use(express.json())

//---- Rutas ----
app.get('/', (req, res) => {
    res.send('Welcome to my API build with Express ')
})

app.get('/api/products', (req, res)=>{
    const products = [
        {id: 1, name:"product 1", price:300},
        {id: 2, name:"product 2", price:200}
    ]
    res.json(products)
})

app.post('/api/products', ( req, res )=>{
    const newProduct = req.body
    console.log('product received', newProduct)

    res.status(201).json({
        msg: 'product successfully created',
        product : newProduct
    })
})


app.listen(PORT, ()=>{
    console.log(`Server listen Successfully on http://localhost:${PORT}`)
})