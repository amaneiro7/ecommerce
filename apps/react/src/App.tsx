import { useState } from "react";
import { PayButton } from "./components/PayButton";
import { order } from "./models/initialState";
import {CustomerInfo} from './components/CustomerForm'
import { ProductsDetail } from "./components/ProductsDetail";

function App() {
  const {preference,shipment} = order
  const {payer} = preference
  console.log(preference.items)

  return (
    <div className="App">
      
      <ProductsDetail preference={preference} />
      
      <CustomerInfo payer={payer} />
      <PayButton preference={preference} shipment={shipment} />
    </div>
  );
}

export default App;
