import React, { useEffect } from 'react'
import Navbar from "./components/Navbar/Navbar"
import "./App.css"
import Modal from './components/Modal/Modal'
import { useDispatch, useSelector } from 'react-redux'
import { modalAction } from './store/modal-slice'
import axios from 'axios'
import { productAction } from './store/products-slice'
import Cards from './components/Card/Cards'

const App = () => {
  const dispatch=useDispatch();
  const modal=useSelector((state)=>state.modal.isModalClicked);

  function handleAnalyseClick(){
    dispatch(modalAction.toggle())
  }

  useEffect(()=>{
    async function getProducts(){
      const res=await axios.get("https://fakestoreapi.com/products");
      dispatch(productAction.Products(res.data))
    }

    async function getCategories(){
      const res=await axios.get("https://fakestoreapi.com/products/categories");
      dispatch(productAction.Category(res.data))
    }
    
    getProducts();
    getCategories();
  },[dispatch])

  return (
    <main>
      <Navbar />
      {modal && <Modal />}
      <Cards />
      <button className='analyseBtn' onClick={handleAnalyseClick}>ANALYSE</button>
    </main>
  )
}

export default App