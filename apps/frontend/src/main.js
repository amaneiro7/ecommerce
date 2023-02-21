import "./style.css";
import { config } from "./config";
import { order } from "./initialState";
import { insertLoader } from "./loader";

const mp_script = document.createElement("script");
mp_script.src = config.libraryUri;
document.head.append(mp_script);

const { preference, shipment } = order;

// render Product detail

const renderProductsDetail = () => {
  const productsDetail = document.createElement("div");
  productsDetail.className = "product-container";
  const { items } = preference;
  items?.forEach((item) => {
    const container = document.createElement("div");
    container.className = "product-card";
    const img = document.createElement("img");
    img.src = item.picture_url;
    img.alt = item.title;
    const title = document.createElement("h4");
    title.textContent = item.title;
    const price = document.createElement("span");
    price.textContent = `Price: ${item.unit_price.toString()}`;
    const quantity = document.createElement("span");
    quantity.textContent = `Quantity: ${item.quantity.toString()}`;
    container.append(title, img, price, quantity);
    productsDetail.append(container);
  });
  document.querySelector("#products-detail")?.append(productsDetail);
};

const renderPayerInfo = () => {
  const { payer } = preference;

  const container = document.createElement("div");
  const name = document.createElement("span");
  name.textContent = payer?.name;
  const email = document.createElement("h5");
  email.textContent = payer?.email;
  const phone = document.createElement("h5");
  phone.textContent = `${payer?.phone?.area_code} ${payer?.phone?.number}`;
  container.append(name, email, phone);

  document.querySelector("#customer-info")?.append(container);
};

const renderShipment = () => {
  const container = document.createElement("div");

  const cost = document.createElement("h5");
  cost.textContent = `Cost: ${shipment?.cost?.toString()}`;
  const provider = document.createElement("h5");
  provider.textContent = `Provider: ${shipment?.provider}`;
  container.append(cost, provider);

  document.querySelector("#shipment-detail")?.append(container);
};

const getPreferenceId = async (order) => {
  try {
    const response = await fetch(`${config.serverUri}/api/create_preference`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    });

    const data = await response.json();

    return data.id;
  } catch (error) {
    console.error("Error en la order");
  }
};

renderProductsDetail();
renderPayerInfo();
renderShipment();

const payButton = document.querySelector("#paybutton");
payButton.addEventListener("click", async () => {
  const loader = insertLoader();
  payButton.append(loader);
  const preferenceId = await getPreferenceId({ preference, shipment });

  const mp = new window.MercadoPago(config.mpPublicKey, {
    locale: "es-CL",
  });

  mp.checkout({
    preference: {
      id: preferenceId,
    },
    autoOpen: true,
  });
  loader.remove();
});
