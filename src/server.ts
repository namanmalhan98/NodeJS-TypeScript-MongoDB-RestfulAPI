import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { router } from './routes/userDetails';
import connects from './config/db';

// Create an application
const app = express();

dotenv.config();

// Connect to db
connects();

app.use(express.json());

app.use(cors());

// Use middleware
app.use('/', router);

// Setup a first endpoint at localhost:5000/ to return a text
app.get('/', (req: Request, res: Response) => {
  // Response object will send a text to client
  res.send('Hello world');
});

// Setting up for application listen port 5000
app.listen(process.env.port, () => {
  console.log(`Application is listening on port: ${process.env.port}`);
});
