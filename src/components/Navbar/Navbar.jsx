import React from 'react'
import "./Navbar.css"
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from '../../store/products-slice';

const Navbar = () => {
    const dispatch=useDispatch();
  const categories=useSelector((state)=>state.product.Categories);
  const selectedCategory=useSelector((state)=>state.product.selectedCategory);

  function handleSelectedCategory(category){
    dispatch(productAction.SelectedCategory(category))
  }
    return (
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand">Daphnis Task</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {selectedCategory ? selectedCategory : "Select Category"}
                            </a>
                            <ul class="dropdown-menu">
                                {categories && categories.map((category,index)=>{
                                    return (
                                        <li key={index} className='category'><a class="dropdown-item" onClick={()=>handleSelectedCategory(category)}>{category}</a></li>
                                    )
                                })}
                            </ul>
                        </li>
                    </ul>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search Products ..." aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

export default Navbar