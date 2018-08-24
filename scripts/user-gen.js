const request = require('request');
const token = require('../shared/config.json')['token'];
const urls = require('../shared/config')['urls'];

const genArr = []
taskCreateLoop(100);

function taskCreateLoop(count) {

  const payload = {
    "name": `Auto ${count}`,
    "groups": [
      {
        "id": "e04b9bc7-110e-4e68-9042-2fee0a45a6ad"
      }
    ],
    "level": "1",
    "phone": "07712345678",
    "email": `auto-${count}@test.com`,
    "address": "No 123, Colombo",
    "gender": "Male",
    "regionalManager": {
      "id": "15fd01ef-e223-4c90-b45f-ad75c3c6ccca",
      "name": "Dilhani Dissanayake"
    },
    "districts": [
    ],
    "dss": [
    ],
    "gnds": [
    ],
    "tabNumber": "1234567890",
    "imeiNumber": "1234567890"
  };


  const options = {
    uri: urls.users,
    headers: { Authorization: token },
    json: true,
    body: payload
  }

  console.log(`${count} - Sending...`);
  request.post(options,
    (err, data, body) => {
      if (err) {
        console.log(err);
      }

      console.log(body);
      console.log("Sent.");

      if (count === 0) {
        return;
      } else {
        taskCreateLoop(count - 1);
      }

    });
}

