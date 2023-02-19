import { Preference } from "./preference.model"
import { Shipment } from "./shipment.model"
export interface Order{
    preference:Preference,
    shipment?:Shipment
}