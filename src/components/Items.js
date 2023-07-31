import React from 'react'

const Items = (props) => {
    const month = props.date.toLocaleString('en-US', { month: 'long' });
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });
    const year = props.date.getFullYear();





  return (
      <div>
          <div>{props.name}</div>
          <div>${props.price}</div>
          <div>
              {day}
              {month}
              {year}
          </div>
          </div>
  )
}

export default Items;
