import { useState } from "react";
import { PayButton } from "./components/PayButton";
function App() {
  const preference = {
    items: [
      {
        id: "item-ID-14534",
        title: "nada",
        currency_id: "CLP",
        description: "Descripción del Item",
        quantity: 5,
        unit_price: 250,
      },
      {
        id: "item-ID-564748",
        title: "titulo del producto",
        currency_id: "CLP",
        description: "Descripción del Item",
        quantity: 3,
        unit_price: 1500,
      },
    ],
    payer: {
      name: "El Chile",
      surname: "Surname",
      email: "argentino@email.com",
      phone: {
        area_code: "56",
        number: 44444444,
      },
      identification: {
        type: "DNI",
        number: "",
      },
      address: {
        street_name: "Street",
        street_number: 123,
        zip_code: "5700",
      },
    },
    shipments: {
      cost: 3000,
    },
  };
  const shipment = {
    address: {
      street_name: "Antupiren",
      street_number: 400,
      city: "Santiago",
    },
    cost: 3000,
  };
  return (
    <div className="App">
      <PayButton preference={preference} shipment={shipment} />
    </div>
  );
}

export default App;
