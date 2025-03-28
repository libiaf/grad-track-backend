import express, {Express, Request, Response} from 'express';
const morgan = require('morgan')

const app:Express = express();
const port = 3000;

app.use(morgan('dev'))

app.get('/', (req:Request, res:Response) => { 
  res.send('Hello Typescript!') 
}) 

app.listen(port, () => { 
  console.log(`Example app listening on port ${port}`) 
}) 

