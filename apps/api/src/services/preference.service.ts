import { type Order } from '../models/order.model'
import { createPreference } from '../mercadopago/createPreference'
import OrderModel from '../db/schemas/Order'

class PreferenceService {
  async createPreference (order: Order) {
    const { preference } = order
    const response = await createPreference(preference)
    const Model = new OrderModel({...order,preference:response})
    await Model.save()
    
    return response.id
  }
}

export { PreferenceService }
