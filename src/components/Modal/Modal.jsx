import React, { useEffect, useState } from 'react'
import "./Modal.css"
import { ImCross } from "react-icons/im"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { modalAction } from '../../store/modal-slice';
import { useDispatch, useSelector } from 'react-redux';
ChartJS.register(ArcElement, Tooltip, Legend);


const Modal = () => {
    const dispatch=useDispatch();
    const product=useSelector((state)=>state.product.ProductData);
    const Categories=useSelector((state)=>state.product.Categories);
    
    const [electronics,setElectronics]=useState(0);
    const [jewelery,setJewelery]=useState(0);
    const [mens,setMens]=useState(0);
    const [womens,setWomens]=useState(0);


    useEffect(()=>{
      if(product && Categories){
        const data=[...product].filter(product=>{
          return product.category==='electronics'
        })
        setElectronics(data.length)
        const data1=[...product].filter(product=>{
          return product.category==='jewelery'
        })
        setElectronics(data.length)
        const data2=[...product].filter(product=>{
          return product.category==="men's clothing"
        })
        setElectronics(data.length)
        const data3=[...product].filter(product=>{
          return product.category==="women's clothing"
        })
        setElectronics(data.length)
        setJewelery(data1.length)
        setMens(data2.length)
        setWomens(data3.length)
      }
    },[product,Categories])


    function handleAnalyseClick(){
        dispatch(modalAction.toggle())
    }

    const data={
      labels: Categories,
      datasets: [
        {
          label: '# of Votes',
          data: [electronics, jewelery, mens, womens],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
        <div className="backdrop" onClick={handleAnalyseClick}>
            <div className="pieModal">
                <div className="content">
                    <div className="heading">
                        <h5 className='pieModalHeading'>Categories in Catalogue</h5>
                        <ImCross className='closeIcon' size={20} onClick={handleAnalyseClick} />
                    </div>
                    <Pie data={data} />
                </div>
            </div>
        </div>
    )
}

export default Modal