import NotificationModel from '../db/schemas/Notification'

class NotificationsService {
  async create (notification: unknown) {
    const Model = new NotificationModel(notification)
    await Model.save()

    return { message: 'Notification received' }
  }
}

export { NotificationsService }
