const request = require('request');
const token = require('../shared/config.json')['token'];
const urls = require('../shared/config')['urls'];

const genArr = [];
taskCreateLoop(500);

function taskCreateLoop(count) {

  const payload = {
    "name": `Auto ${count}`,
    "type": 1,
    "description": "Testing ...",
    "location": {
      "latitude": 7.561269314400291,
      "longitude": 80.26336669921875
    },
    "assigned": [
      {
        "createdAt": "2018-08-07T05:33:52.000Z",
        "email": "lalithyawickramasekare@gmail.com",
        "id": "d81a33cf-1788-420a-8145-1d5fd49355f1",
        "level": "1",
        "phone": "345354444",
        "status": "Enabled"
      }
    ],
    "duedate": "2018-8-31"
  };

  const options = {
    uri: urls.tasks,
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

