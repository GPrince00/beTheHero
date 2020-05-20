const request =  require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection');

describe('ONG', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () => {
        await connection.destroy();
    });

    it('should be able to create a new ONG', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAD2",
                email: "contato@teste.com",
                whatsapp: "11900000000",
                city: "São Paulo",
                uf: "SC"
            });
        
        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8);
    });

    it('should be able to create a new incident', async () => {
        const response = await request(app)
            .post('/incidents')
            .set('Authorization', '6e514fab')
            .send({
                title: "Cachorro Machucado",
                description: "Quebrou a pata",
                value: 300,
            });

        expect(response.body).toHaveProperty('id');
    })   
});