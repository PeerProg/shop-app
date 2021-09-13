import axios from 'axios';

export default async function handler(req, res) {
  console.log('==', req.query);
  const response = await axios.get(
    `https://fakestoreapi.com/products/${req.query.pid}`
  );
  const jsonResponse = await response.data;

  res.status(200).json(jsonResponse);
}
