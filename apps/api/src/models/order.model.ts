import type { Shipment } from "./shipment.model";
import type { CreatePreferencePayload } from "mercadopago/models/preferences/create-payload.model";
export interface Order {
  preference: CreatePreferencePayload;
  shipment: Shipment;
}
