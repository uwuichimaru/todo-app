import Login from './features/auth/login-screen/Login'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import { Register } from './features/auth/register-screen/Register'
import {MyDay} from './pages/my-day/index'
import {Important} from './pages/important/index'
import {Planned} from './pages/planned/index'
import {AssignToMe} from './pages/assign-to-me/index'
import {Tasks} from './pages/tasks/index'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/register',
    element: <Register />
  },
  {
    path: '/myday',
    element: <MyDay/>
  },
  {
    path: '/important',
    element: <Important />
  },
  {
    path: '/planned',
    element: <Planned/>
  },
  {
    path: '/assigned_to_me',
    element: <AssignToMe/>
  },
  {
    path: '/inbox',
    element: <Tasks />
  },
])

const App = () => {
  return (
    <div>
      <RouterProvider router={router}/>
    </div>
  )
}

export default App