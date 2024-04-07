import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Roots/Roots';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import AuthContextProbider from './Probider/AuthContextProbider';
import News from './Pages/News/News';
import PrivateRouts from './Pages/PrivateRouts/PrivateRouts';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('/news.json')
      },
      {
        path: '/news/:id',
        element: <PrivateRouts><News></News></PrivateRouts>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthContextProbider>
      <RouterProvider router={router} />
    </AuthContextProbider>
  </React.StrictMode>,
)
