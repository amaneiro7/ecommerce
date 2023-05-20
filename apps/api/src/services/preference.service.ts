import { type Order } from '../models/order.model'
import { createPreference } from '../mercadopago/createPreference'
import OrderModel from '../db/schemas/Order'

class PreferenceService {
  async createPreference (order: Order) {
    const { preference } = order
    const preferenceId = await createPreference(preference)
    const Model = new OrderModel({...order,preferenceId:preferenceId.id})
    await Model.save()

    return preferenceId
  }
}

export { PreferenceService }
