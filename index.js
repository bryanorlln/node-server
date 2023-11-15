const express = require('express');
const app = express();
const PORT = 3000; 

let tasks = [
    { id: 1, description: 'Hacer la compra', completed: false },
    { id: 2, description: 'Estudiar para el examen', completed: true },
    { id: 3, description: 'Limpiar la casa', completed: false },
    { id: 4, description: 'Hacer ejercicio', completed: true },
    { id: 5, description: 'Terminar el informe', completed: false }
    
];

app.get('/tasks', (req, res) => {
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
