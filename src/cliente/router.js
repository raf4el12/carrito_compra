import { Router } from 'express';

const ClienteRouter = Router();

ClienteRouter.post("/", (req, response) => {
    return response.status(200).json({
        message : "el cliente fue creado con exito !"
    })
})

ClienteRouter.get("/", (req, res) => {
    return res.status(200).json({
        message : "clientes leidos correctamente !"
    })
})

ClienteRouter.put("/", (req, res) => {
    return res.status (200).json({
        message : "Actualizacion correcta de cliente"
    })
})

ClienteRouter.delete("/", (req,resp) => {
    return resp.status(200).json ({
    message : "Cliente eliminado correctamente!"
    })
})

export default ClienteRouter
