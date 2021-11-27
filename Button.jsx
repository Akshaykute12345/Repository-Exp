import React from 'react';

const Button = (props) => {
  return (
      <button
        style={{ backgroundColor: 'yellow', borderRadius: '7px' }}
        onClick={props.onClickHandler}>

        {props.btnTxt}
        
      </button>
  );
};

export default Button;
