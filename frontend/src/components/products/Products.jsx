import React from 'react'
import './Products.css'
import {som} from '../../assets/img/imports';

const Products = () => {
  return (
    <section id='products'>
      <div className='products_section'>
        <h2>Products line</h2>
        <div>
          <img src={som} alt="SOM_chip_gif" />
        </div>
        <div className='paragraph'>
          <p>Yaanendriya introduces innovative System-on-Modules 
            (SoM) integrating advanced GNSS and INS capabilities. 
            Our AI-enhanced DIMU, SIMU, and EPS modules offer smarter, 
            precise solutions, boosting efficiency. These cost-effective,
            adaptable modules empower both global and Indian buyers, 
            supporting domestic manufacturing and transforming industry standards.
          </p>
        </div>
        <center>
          <div className='coming-soon'>
            <h2>Coming Soon...</h2>
          </div>
        </center>
      </div>
    </section>
  )
}

export default Products
