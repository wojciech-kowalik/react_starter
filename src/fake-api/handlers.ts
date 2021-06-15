import { rest } from 'msw'
import { routes } from '@routes'
import { factory } from './fake-factory'

export const handlers = [
  rest.get(routes.getDefaultData(), (_, res, ctx) => {
    return res(ctx.delay(), ctx.json(factory.getDefaultData()))
  }),
]
