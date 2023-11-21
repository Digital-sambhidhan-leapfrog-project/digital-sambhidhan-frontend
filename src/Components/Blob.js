import React from 'react'

const Blob = (props) => {
  return (
    <div style={{
      blobstyle : {
      minWidth: '300px',
      maxWidth: '50%',
      lineHeight: '1.5',
      maxHeight: '50px',
      backgroundColor: `{props.bgcolor}`,
      borderRadius: '50px',
      display: 'flex',
      justifyContent: 'initial',
      alignItems: 'center',
      color: 'white',
      padding: '10px',
  },
  }}>
      {props.text}
    </div>
  )
}

export default Blob;

const blob = {
    blobstyle : {
    minWidth: '300px',
    maxWidth: '50%',
    lineHeight: '1.5',
    maxHeight: '50px',
    backgroundColor: `{bgcolor}`,
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'initial',
    alignItems: 'center',
    color: 'white',
    padding: '10px',
},
}