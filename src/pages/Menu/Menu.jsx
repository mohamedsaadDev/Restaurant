import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Image from 'react-bootstrap/Image';
import fresh1 from "../../data/imges/menu-food-1.jpg"
import fresh2 from "../../data/imges/menu-food-2.jpg"
import fresh3 from "../../data/imges/menu-food-3.jpg"
import fresh4 from "../../data/imges/menu-food-4.jpg"
import fresh5 from "../../data/imges/menu-food-5.jpg"
import fresh6 from "../../data/imges/menu-food-6.jpg"
import "./Menu.css"
import Soup from './Soup';
import Drink from './Drink';
const Menu = () => {
    return (
    <div id='menu' className='container-menu'>
        <div className='baner-menu'></div>
        <div className='rout-menu'>
            <div className='oure-menu'>
                <h1>Oure Menu</h1>
            </div>
            <Tabs
                defaultActiveKey="fresh-food"
                transition={false}
                id="noanim-tab-example"
                className="mb-3"
            >
                <Tab eventKey="fresh-food" title="freshfood">
                    <div className='container-item'>
                        <div className='left-item'>
                            <Image src={fresh1} roundedCircle />
                            <div>
                                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                            </div>
                        </div>
                            <h2 className='price-item-menu'>$8.50</h2>
                    </div>
                    <div className='container-item'>
                        <div className='left-item'>
                            <Image src={fresh2} roundedCircle />
                            <div>
                                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                            </div>
                        </div>
                            <h2 className='price-item-menu'>$8.50</h2>
                    </div>
                    <div className='container-item'>
                        <div className='left-item'>
                            <Image src={fresh3} roundedCircle />
                            <div>
                                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                            </div>
                        </div>
                            <h2 className='price-item-menu'>$8.50</h2>
                    </div>
                    <div className='container-item'>
                        <div className='left-item'>
                            <Image src={fresh4} roundedCircle />
                            <div>
                                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                            </div>
                        </div>
                            <h2 className='price-item-menu'>$8.50</h2>
                    </div>
                    <div className='container-item'>
                        <div className='left-item'>
                            <Image src={fresh5} roundedCircle />
                            <div>
                                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                            </div>
                        </div>
                            <h2 className='price-item-menu'>$8.50</h2>
                    </div>
                    <div className='container-item'>
                        <div className='left-item'>
                            <Image src={fresh6} roundedCircle /> 
                            <div>
                                <h4 className='title-item-menu'>RAIMAT ABADIA</h4>
                                <p className='ingredients-item-menu'>Complex, Dark Cherry, Spice, bodied</p>
                            </div>
                        </div>
                            <h2 className='price-item-menu'>$8.50</h2>
                    </div>
                </Tab>
                <Tab eventKey="soups" title="soups">
                    <Soup/>
                </Tab>
                <Tab eventKey="drinks" title="drinks">
                    <Drink/>
                </Tab>
            </Tabs> 
        </div>
    </div>
)
}
export default Menu