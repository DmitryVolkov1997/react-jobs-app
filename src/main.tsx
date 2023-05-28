import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.sass'
import {BrowserRouter} from 'react-router-dom'
import {App} from './App'
import {ChakraProvider} from '@chakra-ui/react'
import {Provider} from 'react-redux'
import {store} from 'store/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <BrowserRouter>
          <Provider store={store}>
              <ChakraProvider>
                  <App />
              </ChakraProvider>
          </Provider>
      </BrowserRouter>
  </React.StrictMode>,
)
