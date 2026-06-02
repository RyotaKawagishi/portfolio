import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Layout } from './components/Layout'
import { AboutPage } from './pages/AboutPage'
import { HomePage } from './pages/HomePage'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/about',
        element: <AboutPage />,
      },
    ],
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App
