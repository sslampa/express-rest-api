let chai = require('chai')
let chaiHttp = require('chai-http')
let server = require('../server')
let should = chai.should()

chai.use(chaiHttp)

describe('Hello', () => {

  describe('/GET Hello', () => {
    it('it should return json', (done) => {
      chai.request(server)
        .get('/api/hello')
        .end((err, res) => {
          res.should.have.status(200)
          res.body.should.be.an('object')
          done()
        })
    })
  })

})

