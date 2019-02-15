const express = require('express');
//const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const database = {
    1: {
        id: '1',
        name: 'basketball',
        price: 59.99,
        description: 'with this bouncy ball, you could beat Michael Jordan!',
        stock: 5
    },
    2: {
        id: '2',
        name: 'football',
        price: 39.99,
        description: 'with this bouncy ball, you could beat Cristiano Ronaldo!',
        stock: 23
    },
    3: {
        id: '3',
        name: 'baseball',
        price: 19.99,
        description: 'with this bouncy ball, you could be good baseball player!',
        stock: 7
    }
}

app.get('/', (req, res) => {
    res.send('hello world!');
});

app.get('/products', (req, res) => {
    const keys = Object.keys(database);
    const values = keys.map((key) => database[key])
    res.send(
        values
    )
    });

app.get(`/products/:${database}`, (req, res) => {
    const id = req.params.name;
    res.send(id);
});

// add a user to server
// app.post('/users', (req, res) => {
//     const user = req.body;
//     users.push(user);
//     res.send(`user #${users.length} has been added`);
// });

app.listen(port, () => {
    console.log(`app is running at port ${port}`);
});