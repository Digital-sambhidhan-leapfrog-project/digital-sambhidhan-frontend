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
  btn: {
    backgroundColor: '#0D0F37',
    border: 'none',
    outline: 'none',
    color: 'white',
    fontSize: '0.8vw',
    borderRadius: '5px',
    display: 'flex',
    justifyContent: 'center',
    padding: '1.2% 2.5%',
    margin: '2.5% 2%', // Increase margin to create more gap
    alignItems: 'center',
  },
};
