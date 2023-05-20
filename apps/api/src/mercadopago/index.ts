import mercadopago from "mercadopago";

import { config } from "../config";

const initMP = () => {
  mercadopago.configurations.setAccessToken(config.accessToken as string);
  mercadopago.configure({
    access_token: config.accessToken as string,
    integrator_id: config.integratorId,
  });
  console.log("[mercado-pago]: Configuracion exitosa");
};

export { initMP };
