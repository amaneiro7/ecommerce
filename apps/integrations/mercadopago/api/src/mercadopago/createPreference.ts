import mercadopago from "mercadopago";
import type { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
import { config } from "../config";

const createPreference = async (preference: CreatePreferencePayload) => {
  const mpPreference:CreatePreferencePayload = {
    ...preference,
    back_urls: {
      success: `${config.frontendUrl}/payments/success`,
      failure: `${config.frontendUrl}/payments/failure`,
      pending: `${config.frontendUrl}/payments/pending`,
    },
    auto_return: "approved",
    notification_url: `${config.apiUrl}/api/notification_url`,
    external_reference: "",
  };

  const response = await mercadopago.preferences.create(mpPreference);
  

  return response.body
};

export { createPreference };
