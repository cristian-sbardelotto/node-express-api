import express, { json } from 'express';

/*  */
const app = express();
app.use(express.json());

interface UserProps {
  id: number;
  name: string;
  age: number | string;
};

/* Data */
const users: UserProps[] = [
  {id: 1, name: 'Adriano', age: 47},
  {id: 2, name: 'Cristian', age: 14},
  {id: 3, name: 'Grace', age: 18}
];

/* Get Method */
app.get('/users', (request, response) => {
  return response.json(users);
});

/* Post Method */
app.post('/users', (request, response) => {
  const body = request.body;
  
  console.log(body)
  return response.json(body);
});

/* Put Method */
app.put('/users:id', (request, response) => {
  const { id } = request.params;
  const body = request.body;

  console.log(id)
  return response.json(id);

  console.log(body);
  return response.json(body);
});

/* Delete Method */
app.put('/users:id', (request, response) => {
  const { id } = request.params;

  console.log(id)
  return response.json(id)
});

/* Run Server */
const port = 3333;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});