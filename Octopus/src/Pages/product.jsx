// React Imports
import {useState } from "react"

// Component Imports
import Topbar from "../Components/Topbar.jsx"
import Order from "../Components/Order.jsx"
import Specification from "../Components/Specification.jsx"

// General Imports
import Item from "../assets/philips-plumen.jpg"
import Data from "../../server/db.jsx"


// Extension Feature for when 
function NavCart(){
  console.log(g)
}

export default function Product() {

  // Create a State for each malleable data, some states aren't changed but left for add on features
  const [Name,SetName] = useState(Data.name)
  const [Power,SetPower] = useState(Data.power)
  const [Desc,SetDesc] = useState(Data.description)
  const [Footer,SetFooter] = useState(Data.footer)
  const [Quantity,SetQuantity] = useState(1)
  const [Cart,SetCart] = useState({})
  const SpecList = {
    Brand : useState(Data.brand),
    "Item weight(g)" : useState(Data.weight),
    "Dimensions (cm)" : useState(Data.Height + " x " + Data.Width + " x " + Data.Length),
    "Item Model nuumber" : useState(Data.model_code),
    "Colour" : useState(Data.colour),
  }
  const OrderList = {
    Price : Data.price,
    Quantity : {
      Value : Quantity,
      Change : SetQuantity
    }
  }

  //Basket Handler
  function AddToCart(ItemName,Quantity){

    if(Cart[ItemName] === undefined){
      Cart[ItemName] = {
        Quantity : Quantity,
        Price : Data.price
      }
    }else{
      Cart[ItemName].Quantity += Quantity
    }
    console.log(Cart)
    alert(Quantity + " " + ItemName + " added to cart")
  }

  function BasketHandler(){
    AddToCart(
      Name,
      Quantity
    )
  }

  // Return Component
  return (

    <div className = "Home">

      <Topbar/>
      <img className = "Product" src = {Item} alt = "Philips Plumen" />
      <h1>{Name}</h1>
      <a>{Power + " // Packet of 4"}</a>
      <Order Data = {OrderList}></Order>
      <button className="Cart" onClick = {BasketHandler}>
        <b>
          Add to cart
        </b>
      </button>
      <br/>
      <div className = "Description">
        <h1>Description</h1>
        <a>{Desc}</a>
        <br/><br/>
      </div>
      <div className = "Specifications">
        <h1>Specifications</h1>
        <Specification Spec = {SpecList}/>
      </div>
      <br/><br/>
      <a className = "Footer">{Footer}</a>
      
    </div>

  )

}
