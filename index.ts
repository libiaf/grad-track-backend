import express, {Express, Request, Response} from 'express';
const morgan = require('morgan')


const app:Express = express();
const port = 3000;

app.use(morgan('dev'))

app.use(express.json()) 

app.get('/evaluados/getallevaluados', (req:Request, res:Response) => { 
  res.send('Obtener lista con todos los evaluados') 
}) 

app.post('/evaluados/crearevaluado', (req:Request, res:Response) => {
  res.send(`Crear nuevo evaluado con id ${req.body.id}`)
})

app.patch('/evaluados/updateevaluado/:id', (req:Request, res:Response) => {
  res.send(`Actualizar el evaluado con id ${req.params.id} con el nombre "${req.body.nombre}"`)
})

app.delete('/evaluados/deleteevaluado', (req:Request, res:Response) => {
  res.send(`Borrar el evaluado con id ${req.body.id}`) 
}) 

app.get('/evaluados/getevaluado/:id', (req:Request, res:Response) => { 
  res.send(`Obtener evaluado con id ${req.params.id}`) 
}) 

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`) 
}) 

