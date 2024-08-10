const request = require('supertest')
const server = require('../index')

const id = Math.floor(Math.random() * 88888888)
const coffee = { id, nombre: 'test' }

describe('Operaciones CRUD de cafes', () => {
  test('REQ 1:  GET / cafes | retorna statuscode 200 y 1 array con minimo 1 elemento ', async () => {
    const response = await request(server).get('/cafes').send()
    expect(response.status).toBe(200)
    expect(response.body).toBeInstanceOf(Array)
    expect(response.body.length).toBeGreaterThanOrEqual(1)
  })

  test('REQ 2:  DELETE /cafes/:id | retornar 404 cuando el id no existe', async () => {
    const response = await request(server).delete('/cafes/fake_id').set('Authorization', 'fake_token').send()
    expect(response.status).toBe(404)
  })

  test('REQ 3: POST /cafes | retorna 201 al crear un nuevo cafe', async () => {
    const response = await request(server).post('/cafes').send(coffee)
    expect(response.status).toBe(201)
    expect(response.body).toContainEqual(coffee)
  })

  test('REQ 4: PUT / cafes/:id | retorna 400 al intentar actualizar un cafe donde el params id no corresponda al payload id', async () => {
    const response = await request(server).put('/cafes/fake_coffee_id').send(coffee)
    expect(response.status).toBe(400)
  })
})
