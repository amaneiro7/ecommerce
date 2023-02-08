import { Shipment } from "./shipment.model";
export interface Preference {
    items:Item[],
    payer:Payer,
    shipments: {
        cost: Shipment['cost']
        mode?: string
    }
}

export interface Item {
    id?:number | string;
    title: string;
    description:string;
    quantity:number;
    unit_price:number;
    currency_id?: string,

}

export interface Payer {
    name:    string;
    surname: string;
    email:   string;
    phone?:   Phone;
    address?: Address;
    identification?:Identification
}

export interface Address {
    street_name:   string;
    street_number: number;
    zip_code:      string;
}

export interface Phone {
    area_code: string;
    number:   string | number;
}

export interface PreferenceId{

    id:string
}
export interface Identification {
    type: string,
    number:string
}