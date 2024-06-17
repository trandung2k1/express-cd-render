const request = require('supertest');
const app = require('../src');
describe('GET /', () => {
    it('Response with route /', (done) => {
        request(app).get('/').expect('Welcome to the server!', done);
    });
});
