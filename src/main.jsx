import { render } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './app';
import About from './Components/About';
import Books from './Components/Books';
import Home from './Components/Home';
import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/books',
                element: <Books />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
])

render(<RouterProvider router={router}/>, document.getElementById('app'));
