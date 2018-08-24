const request = require('request');
const token = require('../shared/config.json')['token'];
const urls = require('../shared/config')['urls'];

const genArr = [];
taskCreateLoop(100);

function taskCreateLoop(count) {

  const payload = {
    "message": `Auto-${count}`,
    "receivers": [
      "d81a33cf-1788-420a-8145-1d5fd49355f1"
    ]
  };

  const options = {
    uri: urls.messages,
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

