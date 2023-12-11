const axios = require('axios');

const baseUrl = 'https://api.spacexdata.com/v3/launches';

exports.getAllLaunches = async() =>{
    let response = await axios.get(baseUrl);
    return response.data;
}