// import {useState} from 'react'

function Button( { value , handleClick } ){
    return (
        <div className='button'>
            <button value={value} onClick= {handleClick} >{value}</button>
            </div>
    )
}
export default Button;