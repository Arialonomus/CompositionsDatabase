// Import dependencies
import express from 'express';
import cors from 'cors';
import * as composers from './controllers/composers-controller.mjs';
import * as catalogues from './controllers/catalogues-controller.mjs';
import * as instruments from './controllers/instruments-controller.mjs'
import 'dotenv/config';

// Configure Middleware
const app = express();
const port = process.env.PORT_BACKEND;
const frontend_url = `${process.env.FRONTEND_URL_ROOT}:${process.env.PORT_FRONTEND}`

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
app.post('/api/composers', composers.createComposerController);
app.get('/api/composers', composers.retrieveComposersController);
app.put('/api/composers/:id', composers.updateComposerController);
app.delete('/api/composers/:id', composers.deleteComposerController);

// Catalogues
app.post('/api/catalogues', catalogues.createCatalogueController);
app.get('/api/catalogues', catalogues.retrieveCataloguesController);
app.put('/api/catalogues/:id', catalogues.updateCatalogueController);
app.delete('/api/catalogues/:id', catalogues.deleteCatalogueController);

// Instruments
app.post('/api/instruments', instruments.createInstrumentController);
app.get('/api/instruments', instruments.retrieveInstrumentsController);
app.put('/api/instruments/:id', instruments.updateInstrumentController);
app.delete('/api/instruments/:id', instruments.deleteInstrumentController);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});