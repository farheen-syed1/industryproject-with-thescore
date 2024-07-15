import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors'; // Import CORS
import nbaRoutes from './routes/nba.js';
import soccerRoutes from './routes/soccer.js';
import nflRoutes from './routes/nfl.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors()); // Enable CORS
app.use('/images', express.static(path.join(__dirname, '../src/assets/images')));

app.use('/api/nba', nbaRoutes);
app.use('/api/soccer', soccerRoutes);
app.use('/api/nfl', nflRoutes);

app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
