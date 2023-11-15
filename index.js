const express = require('express');
const app = express();
const PORT = 3000; // Puedes cambiar el puerto si es necesario

let tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: true },
    // Agrega más tareas aquí
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
