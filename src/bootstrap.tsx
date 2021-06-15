import App from './app'
import React from 'react'
import ReactDOM from 'react-dom'
import { worker } from './fake-api/worker'

if (process.env.NODE_ENV === 'development') {
  worker.start()
}

ReactDOM.render(<App />, document.getElementById('app'))
