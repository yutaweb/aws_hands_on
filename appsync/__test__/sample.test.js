// import axios from 'axios';

var axios = require('axios');

const dotenv = require('dotenv').config();

const API_URL = process.env.API_URL;
const API_KEY = process.env.API_KEY;


const query = `
query listMyModelTypes {
    listMyModelTypes {
        items {
            id
            title
        }
    }
}`;
    
it('データ取得', async () => {
  const response = await axios.post(
    API_URL,
    {
      query: query,
    },
    {
      headers: {
        'x-api-key': API_KEY,
      },
    }
  );

  console.log(JSON.stringify(response.data));
});