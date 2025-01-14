import React from 'react'
import './Title.css'

const Title = ({title, subTitle}) => {
  return (
    <div id="heading">
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
    </div>
  )
}

export default Title