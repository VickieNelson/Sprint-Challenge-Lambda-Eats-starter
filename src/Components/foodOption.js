import React from "react"

export default function FoodOption(props) {
    //image styling
const foodImg = {
    width: '100%',
    height: '400px',
    backgroundImage: `url(${props.image})`,
    backgroundSize:'contain',
    backgroundPosition:'center center',
    backgroundRepeat:'no-repeat'

}

  return (

      //not sure if this is right yet??
<div className="foodOptionContainer">

<div style={foodImg}></div>
<h2>{props.name}</h2>
<p>{props.tags}</p>
<div className="averageTime">{props.time}</div>
<div className="fee">{props.fee}</div>


  )
}
