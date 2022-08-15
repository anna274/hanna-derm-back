const express = require("express");
const services = require('./data/services.json')
const app = express();

app.get("/services", (request, response) => {
    response.send(services);
});

app.get("/services/:serviceId", (request, response) => {
  const service = services.find(({ id }) => {
    console.log('id', id);
    console.log('request.params.serviceId', request.params.serviceId);
    console.log('===',  id === request.params.serviceId)
    return id === request.params.serviceId
  })
  console.log('service', service)
  response.send(service);
});

app.listen(8000, () => {
  console.log('Server started')
});