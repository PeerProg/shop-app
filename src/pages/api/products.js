import axios from 'axios';

export default async function handler(req, res) {
  const apiCallResponse = await axios.get('https://fakestoreapi.com/products');
  const jsonResponse = await apiCallResponse.data;

  res.status(200).json(jsonResponse);
}
