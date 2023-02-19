import { Order } from "./models/order.model";

export const order: Order = {
  preference: {
    payer: {
      name: "john",
      surname: "doe",
      email: "john@mail.com",
      address: {
        street_name: "Antupiren",
        street_number: 400,
        zip_code: "170000",
      },
      phone:{
        area_code:'56',
        number:99881234
      },
      identification: {
        type: "CI",
        number: "",
      }
    },
    items: [
      {
        id: "item-ID-14534",
        title: "Product 1",
        currency_id: "CLP",
        description: "Descripción del Item",
        quantity: 5,
        unit_price: 250,
      },
      {
        id: "item-ID-564748",
        title: "Product 2",
        currency_id: "CLP",
        description: "Descripción del Item",
        quantity: 3,
        unit_price: 1500,
      }
    ],

    shipments: {
      cost: 5000,
    },
  },
  shipment: {
    provider:"chilexpress",
    cost: 5000
  },
};
