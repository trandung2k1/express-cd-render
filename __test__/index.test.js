const request = require('supertest');
const app = require('../src');
describe('GET /', () => {
    it('Response with route welcome', (done) => {
        request(app).get('/api/welcome').expect('Welcome to the server!', done);
    });
});
