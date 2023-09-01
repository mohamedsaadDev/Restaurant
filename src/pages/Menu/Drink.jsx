import React from 'react'
import Image from 'react-bootstrap/Image';
import drink1 from "../../data/imges/drink-1.jpg"
import drink2 from "../../data/imges/drink-2.jpg"
import drink3 from "../../data/imges/drink-3.jpg"
import drink4 from "../../data/imges/drink-4.jpg"
const Drink = () => {
    return (
        <>
        <div className='container-item'>
            <div className='left-item'>
                <Image src={drink1} roundedCircle />
                <div>
                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                </div>
            </div>
                <h2 className='price-item-menu'>$8.50</h2>
        </div>
        <div className='container-item'>
            <div className='left-item'>
                <Image src={drink2} roundedCircle />
                <div>
                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                </div>
            </div>
                <h2 className='price-item-menu'>$8.50</h2>
        </div>
        <div className='container-item'>
            <div className='left-item'>
                <Image src={drink3} roundedCircle />
                <div>
                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                </div>
            </div>
                <h2 className='price-item-menu'>$8.50</h2>
        </div>
        <div className='container-item'>
            <div className='left-item'>
                <Image src={drink4} roundedCircle />
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

export default Drink