import React from 'react'
import Items from './Items';

export const Item = (props) => {
    return (
     
        <div>
            <div>
                <Items name={props.item[0].name}
                    price={props.item[0].price}
                    date={props.item[0].date}></Items>
            </div>
            <div>
                <Items name={props.item[1].name}
                    price={props.item[1].price}
                    date={props.item[1].date}></Items></div>
          
        </div>
    )

};
export default Item;