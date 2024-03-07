// Import dependencies
import express from 'express';
import cors from 'cors';
import { 
  createComposerController, 
  retrieveComposersController, 
  updateComposerController, 
  deleteComposerController } from './controllers/composers-controller.mjs';
import 'dotenv/config';

// Configure Middleware
const app = express();
const port = process.env.PORT_BACKEND;
const frontend_url = `http://localhost:3000` //`${process.env.FRONTEND_URL_ROOT}:${process.env.PORT_FRONTEND}`

app.use(cors({
  origin: frontend_url
}));
app.use(express.json());

// Test endpoint
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the Composers API' });
});

// ROUTE HANDLING **********************************************
// Composers
app.post('/api/composers', createComposerController);
app.get('/api/composers', retrieveComposersController);
app.put('/api/composers/:id', updateComposerController);
app.delete('/api/composers/:id', deleteComposerController);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});