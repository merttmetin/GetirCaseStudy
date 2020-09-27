const request  = require('supertest');
const app = require('./app');

// EndPoint test with request parameters.
describe('Test endpoint with right parameters', () => {
    test('It should response with 200 status code', done => {
      request(app)
        .post('/getRecords')
        .send({
          startDate: "2016-04-01",
          endDate: "2016-04-31",
          minCount: 4224,
          maxCount: 4224
        })
        .then(response => {
          expect(response.statusCode).toBe(200);
          done();
        });
    });
});

// EndPoint test with request parameters.
describe('Wrong endpoint test with 404 status code', () => {
  test('Wrong End Point Test', done => {
    request(app)
      .post('/wrongEndPointTest')
      .send({
        startDate: "2016-04-01",
        endDate: "2016-04-31",
        minCount: 4224,
        maxCount: 4224
      })
      .then(response => {
        expect(response.statusCode).toEqual(404);
        done();
      });
  });
});

//Missing Parameter test
describe('Missing Parameter Test', () => {
  test('Missing or Invalid parameters test',done=>{
    request(app)
    .post('/getRecords')
    .send({
      startDate: "2016-04-01",
      endDate: "2016-04-31",
      minCount: 4224,
    })
    .then(response => {
      expect(response.statusCode).toBe(400);
      done();
    });
  })
});