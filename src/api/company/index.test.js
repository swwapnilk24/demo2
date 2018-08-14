import request from 'supertest-as-promised'
import { signSync } from '../../services/jwt'
import express from '../../services/express'
import { User } from '../user'
import routes, { Company } from '.'

const app = () => express(routes)

let userSession, adminSession, company

beforeEach(async () => {
  const user = await User.create({ email: 'a@a.com', password: '123456' })
  const admin = await User.create({ email: 'c@c.com', password: '123456', role: 'admin' })
  userSession = signSync(user.id)
  adminSession = signSync(admin.id)
  company = await Company.create({})
})

test('POST /companies 201 (admin)', async () => {
  const { status, body } = await request(app())
    .post('/')
    .send({ access_token: adminSession, name: 'test', address: 'test', website: 'test' })
  expect(status).toBe(201)
  expect(typeof body).toEqual('object')
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.website).toEqual('test')
})

test('POST /companies 401 (user)', async () => {
  const { status } = await request(app())
    .post('/')
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('POST /companies 401', async () => {
  const { status } = await request(app())
    .post('/')
  expect(status).toBe(401)
})

test('GET /companies 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get('/')
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(Array.isArray(body)).toBe(true)
})

test('GET /companies 401 (user)', async () => {
  const { status } = await request(app())
    .get('/')
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /companies 401', async () => {
  const { status } = await request(app())
    .get('/')
  expect(status).toBe(401)
})

test('GET /companies/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .get(`/${company.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(company.id)
})

test('GET /companies/:id 401 (user)', async () => {
  const { status } = await request(app())
    .get(`/${company.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('GET /companies/:id 401', async () => {
  const { status } = await request(app())
    .get(`/${company.id}`)
  expect(status).toBe(401)
})

test('GET /companies/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .get('/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})

test('PUT /companies/:id 200 (admin)', async () => {
  const { status, body } = await request(app())
    .put(`/${company.id}`)
    .send({ access_token: adminSession, name: 'test', address: 'test', website: 'test' })
  expect(status).toBe(200)
  expect(typeof body).toEqual('object')
  expect(body.id).toEqual(company.id)
  expect(body.name).toEqual('test')
  expect(body.address).toEqual('test')
  expect(body.website).toEqual('test')
})

test('PUT /companies/:id 401 (user)', async () => {
  const { status } = await request(app())
    .put(`/${company.id}`)
    .send({ access_token: userSession })
  expect(status).toBe(401)
})

test('PUT /companies/:id 401', async () => {
  const { status } = await request(app())
    .put(`/${company.id}`)
  expect(status).toBe(401)
})

test('PUT /companies/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .put('/123456789098765432123456')
    .send({ access_token: adminSession, name: 'test', address: 'test', website: 'test' })
  expect(status).toBe(404)
})

test('DELETE /companies/:id 204 (admin)', async () => {
  const { status } = await request(app())
    .delete(`/${company.id}`)
    .query({ access_token: adminSession })
  expect(status).toBe(204)
})

test('DELETE /companies/:id 401 (user)', async () => {
  const { status } = await request(app())
    .delete(`/${company.id}`)
    .query({ access_token: userSession })
  expect(status).toBe(401)
})

test('DELETE /companies/:id 401', async () => {
  const { status } = await request(app())
    .delete(`/${company.id}`)
  expect(status).toBe(401)
})

test('DELETE /companies/:id 404 (admin)', async () => {
  const { status } = await request(app())
    .delete('/123456789098765432123456')
    .query({ access_token: adminSession })
  expect(status).toBe(404)
})
