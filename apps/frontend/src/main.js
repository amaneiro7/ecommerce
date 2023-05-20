import "./style.css";
import { order } from "./initialState";
import { loadMpLib } from "./loadMpLib";
import { createButton } from "./paybutton";
loadMpLib()

const {preference,shipment} =order
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



renderProductsDetail();
renderPayerInfo();
renderShipment();
createButton("#paybutton", order)


