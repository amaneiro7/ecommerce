import mercadopago from "mercadopago";

import { config } from "../config";

const initMP = () => {
  try {
    mercadopago.configurations.setAccessToken(config.accessToken);
    mercadopago.configure({
      access_token: config.accessToken,
      integrator_id: config.integratorId,
    });
    console.log("[mercado-pago]: Configuracion exitosa");
  } catch (error) {
    console.error("[mercado-pago]: Problemas con la configuracion",error)
  }

};

export { initMP};
