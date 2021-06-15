import * as t from 'zod'

import {
  DataContract
} from '@contracts'

type DataType = t.infer<typeof DataContract>

export type {
  DataType
}
