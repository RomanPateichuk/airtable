import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux"
import {store} from "./redux"
import {AppRoutes} from "./routes/appRoutes.tsx"
import {BrowserRouter as Router} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <AppRoutes/>
      </Router>
    </Provider>

  </React.StrictMode>,
)
