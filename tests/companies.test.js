const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../bin/www');

chai.should();
chai.use(chaiHttp);

describe('Companies endpoints', () => {
  it('Should return 201 on create company', done => {
    chai
      .request(server)
      .post('/companies')
      .send({
        name: 'company',
        address: 'address'
      })
      .end((err, res) => {
        res.should.have.status(201);
      });

    done();
  });

  it('Should return 204 on delete company', done => {
    chai.request(server).delete('/companies/1').end((err, res) => {
      res.should.have.status(204);
    });

    done();
  });
});
