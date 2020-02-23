const chai = require('chai');
const { expect } = chai;
const app = require('supertest')(require('../../src/app'));

describe('Product Service', () => {

    describe('health', () => {
        it('should return status 200', async () => {
            const response = await app.get('/products');
            expect(response.statusCode).to.be.equal(200);
            
        })
    })    

    describe('GET /products', () => {
        it('should return list of products', async () => {
            const response = await app.get('/products');
            expect(response.statusCode).to.be.equal(200);
        })
    })

    describe('POST /products', () => {
        it('should create product', async () => {
            const response = await app.post('/products').send({
                name: "Sale 3",
                price: "2.99",
                image: "image.jpg"
            })
            expect(response.statusCode).to.be.equal(201);
        })
    })
})