const axios = require('axios');

axios.get("https://hp-api.herokuapp.com/api/spells")
    .then(function(response){
        console.log(response.status);
        console.log(response.data[76]);
    })
    .catch(function(error){
        console.log(error);
    })