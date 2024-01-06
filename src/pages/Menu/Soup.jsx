import React from 'react'
import Image from 'react-bootstrap/Image';
import soup1 from "../../data/imges/soup-1.jpg"
import soup2 from "../../data/imges/soup-2.jpg"
import soup3 from "../../data/imges/soup-3.jpg"
import soup4 from "../../data/imges/soup-4.jpg"
const Soup = () => {
  return (
    <>
    <div className='container-item'>
      <div className='left-item'>
        <Image loading='lazy' src={soup1} roundedCircle />
        <div>
          <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
          <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
        </div>
      </div>
        <h2 className='price-item-menu'>$8.50</h2>
    </div>
    <div className='container-item'>
      <div className='left-item'>
        <Image loading='lazy' src={soup2} roundedCircle />
        <div>
          <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
          <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
        </div>
      </div>
        <h2 className='price-item-menu'>$8.50</h2>
    </div>
    <div className='container-item'>
      <div className='left-item'>
        <Image loading='lazy' src={soup3} roundedCircle />
        <div>
          <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
          <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
        </div>
      </div>
        <h2 className='price-item-menu'>$8.50</h2>
    </div>
    <div className='container-item'>
      <div className='left-item'>
        <Image loading='lazy' src={soup4} roundedCircle />
        <div>
          <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
          <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
        </div>
      </div>
        <h2 className='price-item-menu'>$8.50</h2>
    </div>
    <div className='container-item'>
      <div className='left-item'>
        <Image loading='lazy' src={soup1} roundedCircle />
        <div>
          <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
          <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
        </div>
      </div>
        <h2 className='price-item-menu'>$8.50</h2>
    </div>
    </>
  )
}

export default Soup