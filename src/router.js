import { Router } from "express";
import ProductRouter from "./product/router.js";
import OrderRouter from './order/router.js'

const MainRouter = Router()

MainRouter.use('/product', ProductRouter)
MainRouter.use('/order', OrderRouter)

export default MainRouter