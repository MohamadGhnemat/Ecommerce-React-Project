
import {  RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css'
import Root from './routes/Root';
// import Home from './pages/Home/components/Home';
import About from './pages/About/components/About';
import SignIn from './pages/SignIn/components/SignIn';
import SignUp from './pages/SignUp/components/SignUp';
import Categories from './pages/Categories/components/Categories';
import Products from './pages/Products/components/Products';
import Cart from './pages/Cart/components/Cart';
import NotFound from './pages/NotFound/NotFound';








function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
   
    children: [
      {
        path: "/",
        element: <Categories />
      },
      {
              path: "/home",
              element: <Categories />
            },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/categories",
        element: <Categories />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/cart",
        element: <Cart />
      },
   
      {
        path: "/signin",
        element: <SignIn />
      },
      {
        path: "/signup",
        element: <SignUp />
      },
      {
        path: "*",
        element:  <NotFound />,
      },

     
    
    ]
  },





  ]);

  return (
    <>
 

    <RouterProvider router={router} />
    </>
  )
}

export default App
