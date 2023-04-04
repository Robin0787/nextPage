import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './app';
import About from './Components/About';
import BookDetails from './Components/BookDetails';
import Books from './Components/Books';
import ErrorPage from './Components/ErrorPage';
import Home from './Components/Home';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/books',
                element: <Books />,
                loader: () => fetch('https://api.itbook.store/1.0/new')
            },
            {
                path: '/book/:bookID',
                element: <BookDetails />,
                loader: ({params}) => fetch(`https://api.itbook.store/1.0/books/${params.bookID}`)
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
])
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )