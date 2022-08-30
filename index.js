const express = require('express');
const cors = require('cors');
const services = require('./data/services.json');
const doctors = require('./data/doctors.json');
const app = express();

app.use(cors());

app.get('/services', (request, response) => {
  response.send(services);
});

app.get('/services/:serviceId', (request, response) => {
  const service = services.find(({ id }) => id === request.params.serviceId);
  response.send(service);
});

app.get('/doctors', (request, response) => {
  response.send(doctors);
});

app.get('/doctors/:doctorId', (request, response) => {
  const doctor = doctors.find(({ id }) => id === request.params.doctorId);
  response.send(doctor);
});

app.listen(8000, () => {
  console.log('Server started');
});
