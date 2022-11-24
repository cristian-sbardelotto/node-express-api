import express, { json } from 'express';
import { v4, V4Options } from 'uuid';

/* Import Express */
const app = express();
app.use(express.json());

interface UserProps {
  id?: string;
  name: string;
  age: number | string;
};

/* Data */
const users: UserProps[] = [
  {name: 'Adriano', age: 47},
  {name: 'Cristian', age: 14},
  {name: 'Grace', age: 18}
];

/* Get Method */
app.get('/users', (request, response) => {
  return response.json(users);
});

/* Post Method */
app.post('/users', (request, response) => {
  const body = request.body;
  const { name, age } = request.body;
  
  users.push({
    id: v4(),
    name,
    age,
  });

  console.log(body);
  return response.json(users);
});

/* Put Method */
app.put('/users:id', (request, response) => {
  const { id } = request.params;
  const { name, age } = request.body;

  const user = users.find(user => user.id === id);

  if(!user) {
    return response.status(400).json({error: 'User does not exists!'});
  };

  user.age = age;
  user.name = name; 

  console.log(id);

  return response.json(id);
});

/* Delete Method */
app.delete('/users', (request, response) => {
  const { id } = request.params;

  const user = users.find(user => user.id === id);

  users.splice(user, 1);

  return response.json(id);
});

/* Run Server */
const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});