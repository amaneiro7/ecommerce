
import { config } from "../config";

class MercadopagoApi{


    async getPreferenceId(order){
        const response = await fetch(`${config.serverUri}/api/create_preference`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(order),
          });
        
          const data = await response.json();
        
          return data.id;
    }
}

export default new MercadopagoApi()
