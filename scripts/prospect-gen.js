const request = require('request');
const token = require('../shared/config.json')['token'];
const uuid = require('uuid');
const urls = require('../shared/config')['urls'];

const count = 100;
const genArr = [];

for (let i = 0; i < count; i++) {

 const create = {
  "id": uuid.v4(),
  "createdAt": "2018-08-24T17:03:16.583Z",
  "createdBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
  "updatedAt": "2018-08-24T17:03:16.583Z",
  "updatedBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
  "source": "33f68050-c1f0-4283-8212-51b7a910b4ee",
  "gnd": "16823f59-af0d-40ec-a0dc-2f0257d276db",
  "mobileNumber": "07741258963",
  "contactNumber": "01124578096",
  "address": "45 main road colombo",
  "participantName": `Auto-${i}`,
  "farmerName": `Auto-${i}`,
  "nic": "9875473357v",
  "village": "colombo"
 };

 genArr.push(create);
}

const payload = [
 {
  "featureName": "Prospects",
  "update": [],
  "create": genArr,
  "delete": []
 },
 {
  "featureName": "Revisits",
  "update": [],
  "create": [],
  "delete": []
 }
];

const options = {
 uri: urls.prospects,
 headers: { Authorization: token },
 json: true,
 body: payload
}

console.log(`Sending...`);
request.post(options,
 (err, data, body) => {
  if (err) {
   console.log(err);
  }

  console.log("Sent");
 });