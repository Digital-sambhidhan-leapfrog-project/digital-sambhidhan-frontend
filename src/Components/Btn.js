import React from 'react'

const Btn = (props) => {
  return (
    <div>
      <button style={btnStyle.btn}>{props.btnText}</button>
    </div>
  )
}

export default Btn;
const btnStyle = {
    btn:{
        backgroundColor: '#0D0F37',
        border: 'none',
        outline: 'none',
        color: 'white',
        fontSize: '15px',
        borderRadius: '5px',
        display: 'flex',
        justifyContent: 'center',
        padding: '10px 15px',
        alignItems: 'center',
    }
}
