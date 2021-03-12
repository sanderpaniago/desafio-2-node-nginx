const express = require('express')
const app = express()

const mysql = require('mysql')
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
}

const connection = mysql.createConnection(config)

const sql = name => `INSERT INTO people(name) values('${name}')`



app.get('/', (req, res)=> {
    connection.query("SELECT name FROM people", (err, result)=> {
        const newNames = result.map(item=> item.name)
        res.send(`<h1>Full Cycle Rocks!</h1>
            ${newNames.map(item=> {
                return '<p>' + item + '</p>'
            })}
        `)
    })

})

app.get('/create/:name', (req, res)=> {
    connection.query(sql(req.params.name))

    res.send('user criado com sucesso')
})

app.listen(3333, ()=> {
    console.log('Rodando na porta 3333')
})