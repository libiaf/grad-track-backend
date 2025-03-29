import express, {Express, Request, Response} from 'express';
const morgan = require('morgan')


const app:Express = express();
const port = 3000;

app.use(morgan('dev'))

app.use(express.json()) 

app.get('/evaluados/getallevaluados', (req:Request, res:Response) => { 
  res.send('Aqui están todos los evaluados') 
}) 

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`) 
}) 

