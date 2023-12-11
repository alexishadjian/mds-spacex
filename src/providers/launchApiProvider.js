const axios = require("axios");

const baseUrl = 'https://api.spacexdata.com/v4/launches';

exports.getLaunches = async () => {
    let response = await axios.get(baseUrl, {responseType: 'json'});
    return response.data;
}