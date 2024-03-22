import express from 'express';
import { pool } from './db.js';
import morgan from 'morgan';

const app = express();


// Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Ruta inicial de API
app.get("/api", (req, res) => res.json({ message: "Bienvenido a la REST API de CIFF" }))


// Ruta inicial de usuarios
app.get('/users', async (req, res) => {
  try {
    const { rows } = await pool.query('SELECT * FROM users');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Middleware Manejador de erorres
app.use((err, req, res, next) => {
    res.status(500).json({
      status: "error",
      message: err.message,
    });
  });

export default app;
