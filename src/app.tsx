import React, { Suspense, lazy } from 'react'

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'

import { ThemeProvider, NoSsr, createMuiTheme } from '@material-ui/core'

import { Container } from '@layout/Container'
import { routes } from '@routes'
import './app.css'

const Default = lazy(() => import('@pages/default/Index'))

const theme = createMuiTheme({
  typography: {
    htmlFontSize: 10,
  }
})

const App: React.FC<{}> = ({}) => {
  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
          <Suspense fallback="Loading...">
            <Container>
              <Router>
                <Switch>
                  <Route path={`${routes.defaultView()}`} component={Default} />
                </Switch>
              </Router>
            </Container>
          </Suspense>
      </ThemeProvider>
    </NoSsr>
  )
}

export default App
