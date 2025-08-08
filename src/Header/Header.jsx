import React from 'react'
import './Header.css';

const Header = () => {
  return (
    <>
    <div className='head1'>
        <div className="leftInfo">
            <ul className='leftlist'>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='name1'>
            <h1>Raksha Bidadi Ravishankar</h1>
            <h3>Frontend Developer</h3>
        </div>
        <div className="icon">
            <img src='src/assets/girl icon.gif' alt='icon' width="190px" height="150px"/>
        </div>   
    </div> 
    <div className='body1'>
        <br />
        <div className="image">
            <img src='src/assets/images.jpeg' alt='pic' width="250px" height="250px"/>
        </div>
    </div>
    </>
  )
}

export default Header
