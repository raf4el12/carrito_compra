import { Router } from 'express'

const ProductRouter = Router()

ProductRouter.post('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Creado correctamente'
  })
})

ProductRouter.get('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Leido correctamente'
  })
})

ProductRouter.put('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Actualizado correctamente'
  })
})

ProductRouter.delete('/', (req, resp) => {
  return resp
  .status(200)
  .json({
    message: 'Eliminado correctamente'
  })
})

export default ProductRouter