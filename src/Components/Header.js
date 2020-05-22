import React from "react";
import { NavLink } from "react-router-dom";

export default function Header(props) {
    const headerColor = {
        color: #F9F9F9;
        backgroundColor: #a9a9a9;

        const pizzaOrder = (
            width: 70%;
            height: 500px;
        )
    }
  return (
    <header className='header'>
        {/* //the nav bar  */}
      <nav className='nav-bar'>

          {/* //nav bar elems */}
        <div className='title-div'>Lambda Eats </div>

        {/* //div for links */}
        <div className='links-div'>

            {/* //links */}

            {/* //home */}
          <NavLink to={"/"}>
            <div className='link' style={initialColor}>
              Home
            </div>
          </NavLink>

        
{/* //help */}
          <div className='link'>Help</div>
        </div>
      </nav>


      {/* //banner section */}
      <section className="banner">
        <h2>Create your pizza, YOUR way!</h2>
        <NavLink to={"/pizza"}>
          <button className="pizzabutton">Get started</button>
        </NavLink>
      </section>
      {/* //close banner section */}
    </header>
  );
  //close return
}
//close header function
