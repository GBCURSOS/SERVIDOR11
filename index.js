
import express from 'express';
import cors from 'cors';
import { conectarDB } from './CONFIGDB/connectDB.js';
import { insertarSemillaDB } from './CONFIGDB/insertSemillaDB.js';
import apiRoutes from './ROUTES/apiRoutes.js';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 4200;

app.use(cors());
app.use(express.json());
app.use(express.static("PUBLIC"));

app.get('/prueba', (req, res) => {
  res.json({message:'Prueba de respuesta de servidor'});
});

conectarDB();
insertarSemillaDB();

// Usar las rutas de la API bajo el prefijo /api
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});


// Para hombres: https://randomuser.me/api/portraits/men/{n}.jpg
// Para mujeres: https://randomuser.me/api/portraits/women/{n}.jpg

































// npm install --save-dev nodemon