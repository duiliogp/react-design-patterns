import React from 'react'

export const printProps = Component => {
  return (props) => {
    console.log(props);
    return <Component {...props} />
  } 
}


// export const UserInfoWrapped  = (props) => {
//     console.log(props);
//     return <Component {...props} />
// }
