import express from 'express'
import { createPreference } from '../mercadopago/createPreference'
import { PreferenceService } from '../services/preference.service'
const service = new PreferenceService()

const router = express.Router()

router.post('/', async (req, res, next) => {
  try {
    const order = req.body
    const preferenceId = await service.createPreference(order)
    res.json({id:preferenceId})
  } catch (error) {
    next(error)
  }
})

export default router
