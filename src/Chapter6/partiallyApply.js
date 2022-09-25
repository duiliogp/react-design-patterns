export const partiallyApply = (Component, partialProps) => {
  return props => {
    return <Component {...partialProps} {...props} />
  }
}

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

export const WarningButton = partiallyApply(Button, {color: 'orange', size: 'large'});