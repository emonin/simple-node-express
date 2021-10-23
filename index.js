const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json());
const port = process.env.PORT || 5000

const users = [{ id: 0, name: 'Shabana', email: 'Shabana@gmail.com', phone: '01788888888' },
{ id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', phone: '01788888888' },
{ id: 2, name: 'Shrabonti', email: 'Shrabonti@gmail.com', phone: '01788888888' },
{ id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01788888888' },
{ id: 4, name: 'Soniya', email: 'Soniya@gmail.com', phone: '01788888888' },
{ id: 5, name: 'Susmita', email: 'Susmita@gmail.com', phone: '01788888888' },
];

app.get('/', (req, res) => {
  res.send('WOW. My Second Node.This is Good')
});
app.get('/users', (req, res) => {
  // console.log(req.query.search)
  //use query
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
    res.send(searchResult);
  }
  else {
    res.send(users);
  }

});

// App Method
app.post('/users', (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  res.json(newUser);
})

//dynamic api
app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})