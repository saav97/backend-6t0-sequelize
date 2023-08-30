const express = require('express');
const estudianteRoutes = require('./routes/estudianteRoute');
const app=express();

app.use('api/estudiante', estudianteRoutes);
app.listen(3000, () =>{
    console.log('Servidor corriendo por puerto 3000');
})