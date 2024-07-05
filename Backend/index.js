// index.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nbaRouter from './routes/nba.js';
import nflRouter from './routes/nfl.js';
import soccerRouter from './routes/soccer.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

console.log('RAPIDAPI_KEY:', process.env.RAPIDAPI_KEY);

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/api/nba', nbaRouter);
app.use('/api/nfl', nflRouter);
app.use('/api/soccer', soccerRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;