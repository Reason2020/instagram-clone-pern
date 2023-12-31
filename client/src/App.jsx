import './App.css';
import Signup from './pages/signup/Signup';
import Home from './pages/home/Home';
import { 
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import { useState } from 'react';
import Login from './pages/login/Login';
import Profile from './pages/profile/Profile';


function App() {
  const [ loggedIn, setLoggedIn ] = useState(false);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/accounts/login',
      element: <Login />
    },
    {
      path: '/accounts/signup',
      element: <Signup />
    },
    {
      path: '/users/:userId',
      element: <Profile />
    } 
  ]);  

  return (
    <RouterProvider router={router} />
  )
}

export default App
