import '@testing-library/jest-dom'
import { configure } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { server } from '@fake-api/server'
import fetch from 'cross-fetch'

if (!window.fetch) {
  window.fetch = fetch;
}

configure({
  testIdAttribute: 'data-qa-id',
})

beforeAll(() => {
  server.listen()
})

afterEach(() => {
  server.resetHandlers()
})

afterAll(() => {
  server.close()
})
