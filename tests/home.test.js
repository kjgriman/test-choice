const request = require('supertest')
const assert =require('chai').assert
const app = require('../app')

app.get('/', (req, res) => {
    res.status(200).json({ name: 'tobi' })
})

request(app)
    .get('/')
    .expect('Content-Type', /json/)
    .expect('Content-Length', '15')
    .expect(200)
    .end((err) => {
        if (err) throw err
    })
