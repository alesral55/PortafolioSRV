
const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

app.set('view engine', 'hbs')

hbs.registerPartials(__dirname + '/views/partial')

app.use(express.static('public'))

app.get('/', (req, res ) => {
    res.render('AntonyRalon')
})
app.get('/Proyecto1', (req, res ) => {
    res.render('Poyecto1')
})
app.get('/Proyecto2', (req, res ) => {
    res.render('Poyecto2')
})
app.get('/Proyecto3', (req, res ) => {
    res.render('Poyecto3')
})
app.get('/Proyecto4', (req, res ) => {
    res.render('Poyecto4')
})
app.get('/Proyecto5', (req, res ) => {
    res.render('Poyecto5')
})
app.get('/Contacto', (req, res ) => {
    res.render('Contacto')
})
app.get('*', (req, res ) => {
    res.render('404')
})



/*
app.get('*', (req, res)=> {
    res.sendFile(__dirname + '/public/404.html')
})*/

app.listen(port, ()=>{
    console.log(`Ejemplo app listen at http://localhost:${port}`)
})