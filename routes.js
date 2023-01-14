const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        
        conn.query('SELECT * FROM persona', (err, rows) => {
            if (err) return res.send(err);

            res.json(rows);
        });
    });
});

routes.post('/insertar', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err);
        
        console.log(req.body);
        conn.query('INSERT INTO persona SET ?', [req.body], (err, rows) => {
            if (err) return res.send(err);

            // res.json(rows);
            // res.send("Persona insertada");
            res.json({
                isError: false,
                mensaje: 'Proceso Exitoso'
            })
        });
    });
});

module.exports = routes;