import React from 'react'

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button style={{
      color: 'white',
      margin:5,
      padding: size === 'large' ? '14px 24px' : '8px 12px',
      fontSize: size === 'large' ? '32px' : '12px',
      backgroundColor: color
    }} {...props} >{text}</button>
  )
}
// <Button size="large" color="red" text="Hello"

export const DangerButton = props => {
  return (
    <Button {...props} color='#ff6347' />
  )
}

export const BigSuccessButton = props => {
  return (
    <Button {...props} size="large" color='#3cb371' />
  )
}

