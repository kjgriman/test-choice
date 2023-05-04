const swaggerJSDoc = require('swagger-jsdoc')
const swaggerUI = require('swagger-ui-express')

const options = {
    definition: {
        openapi: '3.0.0',
        info: { title: 'api test choice', version: '1.0.0' },
    },
    apis: ['./routes/v1/index.js', './routes/v1/welcome.js'],
}

// docs json format
const swaggerSpec = swaggerJSDoc(options)

// function to set our docs
const swaggerDocs = (app, port) => {
    app.use('/api/v1/docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec))
    app.get('/api/v1/docs.json', (req, res) => {
        res.setHeader('Content-Type', 'application/json')
        res.send(swaggerSpec)
    })
}

module.exports = { swaggerDocs }
