import React from "react";
import { Preference } from "../../models/preference.model";
import { Order } from "../../models/order.model";

export const ProductsDetail = ({preference}: Order) => {
  const {items} = preference
  console.log(items)
  if (items) {
    return (
      <div>
        {items.map((item) => {
          return (
            <div key={item.id}>
              <img src="" alt={item.title} />
              <h3>{item.title}</h3>
              <span>{item.unit_price}</span>
              <span>{item.quantity}</span>
            </div>
          );
        })}
      </div>
    );
  } else{
    return (
        <div>Loading...</div>
    )
  }
};
