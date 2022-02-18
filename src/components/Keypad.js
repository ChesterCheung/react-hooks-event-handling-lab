import React from "react"

function Keypad (){

    function input(){
        console.log('Entering password...')
    }
    return (
        <div>
        <input type= "password" onChange={input}/>
        </div>
    )
}



export default Keypad