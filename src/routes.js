const { Router } = require('express')

const routes = Router();

routes.post('/devs', (request, response) => {
    const {github_username} = request.body;

    
    return response.json({message:'Hello World!'});
});

module.exports = routes;
