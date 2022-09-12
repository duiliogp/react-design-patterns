const express = require('express');


var cors = require('cors')
const app = express();
app.use(cors())


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

app.get('/current-user', (req, res) => {
  res.json(currentUser);
});

app.get('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json(users.find(user => user.id === parseInt(id)));
});

app.post('/users/:id', (req, res) => {
  const { id } = req.params;
  const { user: updatedUser } = req.body;
  users = users.map(user => user.id === id ? updatedUser : user);
  res.json(users.find(user => user.id === parseInt(id)));
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/products', (req, res) => {
  res.json(products);
});

app.get('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json(products.find(product => product.id === parseInt(id)));
});


app.listen(8080, () => {
  console.log('Server is listening on port 8080...');
});

