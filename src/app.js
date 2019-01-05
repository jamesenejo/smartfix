import { config } from 'dotenv';
import bodyParser from 'body-parser';
import express from 'express';
// import morgan from 'morgan';
import modules from './modules';

config();

const app = express();

const port = parseInt(process.env.PORT, 10) || 5000;

app.use(bodyParser.json());
// app.use(morgan('combined'));

modules(app);

app.get('/', (req, res) => res.status(200).json({ message: 'SmartFix API' }));

app.listen(port, () => console.log(`Live at ${port}`));

export default app;
