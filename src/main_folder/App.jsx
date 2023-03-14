/* import Home from '../components/home' */
import React from 'react'
import RoutesApp from '../routes';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default props => {


  return (
    <>
      <ToastContainer autoClose={3000}/>
       <RoutesApp/>
    </>
  )

}