const express = require('express');
const app =express(); 

const PORT = process.env.PORT || 3001; 

app.get('/', (rep, res) => {
    res.send('Hello, World!'); 
});

app.listen(PORT, () => console.log('App running.')); 