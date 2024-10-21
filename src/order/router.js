import { Router } from 'express'

const OrderRouter = Router()

OrderRouter.post('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Creado correctamente'
  })
})

OrderRouter.delete('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Eliminado correctamente'
  })
})

export default OrderRouter