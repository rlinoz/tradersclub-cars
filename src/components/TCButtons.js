import React from 'react'


const style = {
    height: 47 + "px",
    width: 120 + "px",
    margin: 0,
    padding: 0,
    borderRadius: 5 + "px",
    fontWeight: 600,
    fontSize: 11 + "pt"
  };

const styleInverse = {
    height: 47 + "px",
    width: 120 + "px",
    margin: 0,
    padding: 0,
    borderRadius: 5 + "px",
    fontWeight: 600,
    fontSize: 11 + "pt",
    backgroundColor: "transparent",
    border: "white 1px solid",
    color: "white"
  };

export const TCButtonFilled = ({ onClick, text, disabled }) => (
    <button disabled={disabled} style={style} onClick={onClick}>{text}</button>
)

export const TCButtonInverse = ({ onClick, text, disabled}) => (
    <button disabled={disabled} style={styleInverse} onClick={onClick}>{text}</button>
)