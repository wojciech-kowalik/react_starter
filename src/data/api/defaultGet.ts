import { DataType } from '@types'
import { routes } from '@routes'
import { DataContract } from '@contracts'
import errorHandling from '@utils/ErrorHelper'

async function fetchData(): Promise<DataType> {
  const url = new URL(routes.getDefaultData(), window.location.href)

  const response = await fetch(url.toString(), {
    method: 'GET',
    credentials: 'same-origin',
  })

  errorHandling(response.status)

  const data = await response.json()

  return DataContract.parse(data)
}

export { fetchData }