import { HTTP_STATUS_CODES } from '@constants'

import { BadRequest, NotFound, Forbidden, InternalServer } from '@errors/index'

const errorHandling = (status: number): void => {
  if (status === HTTP_STATUS_CODES.BAD_REQUEST) {
    throw new BadRequest()
  }

  if (status === HTTP_STATUS_CODES.NOT_FOUND) {
    throw new NotFound()
  }

  if (status === HTTP_STATUS_CODES.FORBIDDEN) {
    throw new Forbidden()
  }

  if (status === HTTP_STATUS_CODES.INTERNAL_SERVER) {
    throw new InternalServer()
  }
}

export default errorHandling