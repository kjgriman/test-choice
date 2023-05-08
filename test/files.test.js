process.env.NODE_ENV = 'test'

let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../bin/www')

chai.use(chaiHttp)

describe('Files', () => {
    describe('/GET files', () => {
        it('it should GET welcome home', (done) => {
            chai.request(server)
                .get('/api/v1/files')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('status').eql('SUCCESS')
                    res.should.to.be.json
                    done()
                })
        })
    })
})
describe('Files details', () => {
    describe('/GET file details test2.csv', () => {
        it('it should GET welcome home', (done) => {
            chai.request(server)
                .get('/api/v1/file/test2.csv')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('status').eql('SUCCESS')
                    res.body.should.have.property('payload').be.a('string')
                    res.should.to.be.json
                    done()
                })
        })
    })
})
describe('Files data', () => {
    describe('/GET file data formater', () => {
        it('it should GET welcome home', (done) => {
            chai.request(server)
                .get('/api/v1/files/data')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.body.should.have.property('status').eql('SUCCESS')
                    res.body.should.have.property('payload').be.a('object')
                    res.should.to.be.json
                    done()
                })
        })
    })
})

describe('Welcome', () => {
    describe('/GET Welcome', () => {
        it('it should GET all the files', (done) => {
            chai.request(server)
                .get('/api/v1/')
                .end((err, res) => {
                    res.should.have.status(200)
                    res.body.should.be.a('object')
                    res.should.to.be.json
                    res.body.should.have.property('status').eql('SUCCESS')
                    done()
                })
        })
    })
})
