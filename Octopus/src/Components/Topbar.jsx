// Imports
import Logo from "../assets/octopus-logo.svg"
import Basket from "../assets/basket.svg"





// Returns TopBar Component
function Topbar(){

    return (
       <div className="Topbar">
        <img className = "Logo" src = {Logo} alt = "Octopus Energy Logo" />
        <img className = "Basket" src = {Basket} alt = "Basket"/>
       </div>
    )
    
}

export default Topbar