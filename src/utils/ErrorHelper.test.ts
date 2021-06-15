import errorHandling from './ErrorHelper'
import { HTTP_STATUS_CODES } from '@constants'
import { BadRequest, NotFound, Forbidden } from '@errors/index'
import each from 'jest-each'

describe('error helper', () => {
  each([
    [HTTP_STATUS_CODES.FORBIDDEN, Forbidden],
    [HTTP_STATUS_CODES.BAD_REQUEST, BadRequest],
    [HTTP_STATUS_CODES.NOT_FOUND, NotFound],
  ]).it('throw %d exception after errorHandling invoke', (code, exception) => {
    expect(() => {
      errorHandling(code)
    }).toThrow(exception)
  })
})