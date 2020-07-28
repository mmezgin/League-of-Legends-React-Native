
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'react-n-um'
});

const app = express()

app.get('/users', (req, res) => {
  connection.getConnection((err, connection) => {
    connection.query('SELECT * FROM users', (error, results, fields) => {
      if (error) throw error
      res.send(results)


    })
  })

})
app.listen(19001, () => {
  console.warn('success  ' + results)
})