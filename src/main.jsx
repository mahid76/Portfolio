import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
