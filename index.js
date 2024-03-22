import app from './app.js';
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor funcionando en http://localhost:${port}`);
});


/* Correr en puerto abierto
app.listen(80, '0.0.0.0', () => {
    console.log('Servidor funcionando en localhost');
}); */
