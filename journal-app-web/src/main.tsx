// External imports
import { ApolloClient, InMemoryCache } from '@apollo/client'
import { ApolloProvider } from '@apollo/client/react'

// React imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

// Local imports
import './styles.css'
import { JournalApp } from './JournalApp'
import { store } from './store'

const client = new ApolloClient({
  uri: 'http://localhost:3000/graphql',
  cache: new InMemoryCache(),
})


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <JournalApp />
        </BrowserRouter>
      </ApolloProvider>
    </Provider>
  </React.StrictMode>,
)
