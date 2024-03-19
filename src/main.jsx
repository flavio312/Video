import React from 'react'
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import IniciarSesion from './pages/LogIn/IniciarSesion';
import Menu from './pages/Main/Menu';
import Productos from './pages/Products/Productos';
import NuevoProducto from './pages/Form/NuevoProducto';
import Empleados from './pages/Employees/Empleados';
import VerVentas from './pages/ViewSales/VerVentas';
import AddEmployee from './components/pages/AddEmployee/AddEmployee';
import DeleteEmployee from './components/UI/DeleteEmployee/DeleteEmployee';
import CBox from './pages/CBox/CBox';
import Ventas from './pages/Sales/Ventas';

const router = createBrowserRouter([
  {
    path: '/',
    element: <IniciarSesion/>
  },{
    path: '/menu',
    element: <Menu/>
  },{
    path: 'productos',
    element: <Productos/>
  },{
    path:'nuevo-producto',
    element:<NuevoProducto/>
  },{
    path:'empleados',
    element: <Empleados/>
  },{
    path:'nuevo-Empleado',
    element:<AddEmployee/>
  },{
    path: 'eliminar-Empleado',
    element: <DeleteEmployee/>
  },{
    path: 'ver-Ventas',
    element:<VerVentas/>
  },{
    path:'ventas',
    element:<Ventas/>
  },{
    path:'corte-turno',
    element:<CBox/>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
