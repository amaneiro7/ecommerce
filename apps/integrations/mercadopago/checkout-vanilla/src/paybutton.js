import {mercadopagoService} from "./services/mercadopago";
import { config } from "./config";
import { ButtonLoader } from "./loader";

export const createButton = async (element, order) => {
  const { preference, shipment } = order;
  const payButton = document.querySelector(element);
  payButton.addEventListener("click", async () => {
    const loader = ButtonLoader();
    payButton.append(loader);
    
    const preferenceId = await mercadopagoService.getPreferenceId({
      preference,
      shipment,
    });
    
    const mp = new window.MercadoPago(config.mpPublicKey, {
      locale: "es-CL",
    });

    mp.checkout({
      preference: {
        id: preferenceId,
      },
      autoOpen: true,
    });
    setTimeout(() => {
      loader.remove();
    }, 1000);
  });
};
