import React from 'react'

const InputText = (props)=>{

  return (
    <input type="text" 
    value={props.value}
    onChange={props.onHandleChange} 
    onKeyUp={props.onKeyHandler}
   />
  )
}

export default InputText;