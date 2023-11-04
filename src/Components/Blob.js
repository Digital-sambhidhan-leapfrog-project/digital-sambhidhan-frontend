import React from 'react'

const Blob = ({text}) => {
  return (
    <div style={blob.blobstyle}>
      {text}
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
    backgroundColor: '#0D0F37',
    borderRadius: '50px',
    display: 'flex',
    justifyContent: 'initial',
    alignItems: 'center',
    color: 'white',
    padding: '10px',
},
}