const express = require('express');
var bp = require('body-parser')
require('dotenv').config();


var cors = require('cors')
const app = express();
app.use(cors())

app.use(bp.json())
app.use(bp.urlencoded({ extended: true }))

let currentUser = {
  id: 1,
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicyling', 'video games']
}

let users = [{
  id: 1,
  name: 'John Doe',
  age: 54,
  hairColor: 'brown',
  hobbies: ['swimming', 'bicyling', 'video games']
}, {
  id: 2,
  name: 'Brenda Smith',
  age: 33,
  hairColor: 'black',
  hobbies: ['golf', 'mathematics']
}, {
  id: 3,
  name: 'Jane Garcia',
  age: 27,
  hairColor: 'blonde',
  hobbies: ['biology', 'medicine', 'gymnastics']
}];

const products = [{
  id: 1,
  name: 'Flat-Screen TV',
  price: '$300',
  description: 'Huge LCD screen, a great deal',
  rating: 4.5
}, {
  id: 2,
  name: 'Basket Ball',
  price: '$10',
  description: 'Just like the pros use',
  rating: 3.8
}, {
  id: 3,
  name: 'Running Shoes',
  price: '$120',
  description: 'State-of-the-art technology for optimum',
  rating: 4.2
}];

app.get('/', (req, res) => {
  console.clear();
});

app.get('/current-user', (req, res) => {
  console.log('current user...');
  res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  console.log('getting user: ', id);
  res.json(users.find(user => user.id === parseInt(id)));
});

app.post('/users/:id', (req, res) => {
    const { id } = req.params;
    const { user: updatedUser } = req.body;
    users = users.map(u => u.id === parseInt(id) ? updatedUser : u);
    res.json(users.find(u => u.id === parseInt(id)));

});

app.get('/users', (req, res) => {
  console.log('getting all users...');
  res.json(users);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  console.log('getting product:',id);
  res.json(products.find(product => product.id === parseInt(id)));
});


app.listen(process.env.REACT_APP_SERVER_PORT, () => {
  console.clear();
  console.log(`Server is listening on port ${process.env.REACT_APP_SERVER_PORT}...`);
});

