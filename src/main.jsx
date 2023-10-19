import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home.jsx';
import Blogs from './pages/Blogs.jsx';
import Services from './pages/Services.jsx';
import Contact from './pages/Contact.jsx';
import About from './pages/About.jsx'
import SingleBlog from './pages/SingleBlog.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blogs",
        element:<Blogs/>
      },
      {
        path:"/services",
        element:<Services/>
      },
      {
        path:"/about",
        element:<About/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path: "/blogs/:id",
        element: <SingleBlog/>,
        loader: ({params}) => fetch(`https://blog-api-sk0w.onrender.com/blogs/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)