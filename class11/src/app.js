import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/App'

require('./index.html')

const container = document.getElementById('app-container')

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  container
)

if (module.hot) {
  module.hot.accept('./components/App', () => {
    ReactDOM.render(
      <AppContainer>
        <App />
      </AppContainer>,
      container
    )
  })
}
