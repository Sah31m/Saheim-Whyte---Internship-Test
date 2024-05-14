// Imports
import React, { useState } from 'react'




// Calls Increment and Decrement of Quantity
function Operate(QuantityChanged,Value,Quantity){
    QuantityChanged(Value)
}

// Display Quantity and Increment and Decrement Buttons
function QuantityDisplay({Quantity,QuantityChanged}){

    return (
        <div className = "QuantityDisplay">
            <button onClick = {() => Operate(QuantityChanged,-1,Quantity)}>-</button>
            <h2 className = "Quantity">{Quantity}</h2>
            <button onClick = {() => Operate(QuantityChanged,1,Quantity)}>+</button>
        </div>
    )
    
}

// Builds Order Component
function Order({Data}){

    // Creates Quantity State
    const Quantity = Data.Quantity.Value
    const SetQuantity = Data.Quantity.Change

    // Function that changes/updates Quantity
    const QuantityChanged = function(Value){
            
        if(Value === 1){
            SetQuantity(Quantity + 1)
        }else{
            if(Quantity > 1){
                SetQuantity(Quantity - 1)
            }
        }
    
    }

    // Return Order Component
    return (
        <div className = "OrderContainer">
            <h1>£{(Quantity * Data.Price)/100}</h1>
            <QuantityDisplay Quantity = {Quantity} QuantityChanged = {QuantityChanged}></QuantityDisplay>
        </div>
    )

}

export default Order
