import { useState } from "react";
import { PayButton } from "./components/PayButton";
import { order } from "./models/initialState";
import {CustomerInfo} from './components/CustomerForm'
import { ProductsDetail } from "./components/ProductsDetail";
import { ShipmentInfo } from "./components/ShipmentInfo";

function App() {
  const {preference,shipment} = order
  const {payer} = preference
  console.log(shipment)

  return (
    <div className="App">
      
      <ProductsDetail preference={preference} />      
      <CustomerInfo payer={payer} />
      <ShipmentInfo shipment={shipment} />
      <PayButton preference={preference} shipment={shipment} />
    </div>
  );
}

export default App;
