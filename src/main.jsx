// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Provider } from 'react-redux'
// import { appStore } from './utils/appStore'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      {/* <Provider store={appStore}> */}

//     <App />
//      {/* </Provider> */}
//   </StrictMode>,
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'

import { appRouter } from './appRouter'
import { appStore } from './utils/appStore'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={appStore}>
      <RouterProvider router={appRouter} />
    </Provider>
  </StrictMode>
)
