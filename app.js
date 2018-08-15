const data = require('./data');
const uuid = require('uuid');
const _ = require('lodash');
const fs = require('fs');
const faker = require('faker');

const count = 100;
const genArr = []

const surveyDataBlock = {
 "featureName": "SurveyData",
 "update": [],
 "create": [],
 "delete": []
};

const farmerBlock = {
 "featureName": "Farmer",
 "update": [],
 "create": [],
 "delete": []
};

const landParcelBlock = {
 "featureName": "LandParcel",
 "update": [],
 "create": [],
 "delete": []
};

const surveyAnswerBlock = {
 "featureName": "SurveyAnswer",
 "update": [],
 "create": [],
 "delete": []
};

for (let i = 0; i < count; i++) {

 const surveyId = uuid.v4();
 const farmerId = uuid.v4();
 const landParcelId = uuid.v4();

 data.forEach((block) => {

  const save = [];


  if (block.featureName === 'SurveyData') {

   const initData = block.create[0];

   const d = {
    "id": surveyId,
    "survey": "6ace900f-72f1-4fab-a583-cebc88c59bd3",
    "createdBy": initData.createdBy,
    "updatedBy": initData.updatedBy,
    "createdAt": initData.createdAt,
    "updatedAt": initData.updatedAt,
    "lastSyncedTime": initData.lastSyncedTime
   };

   if (i === 0) {
    surveyDataBlock.create.push(d);
    genArr.push(surveyDataBlock);
   } else {
    const newBlock = _.find(genArr, el => el.featureName === 'SurveyData');
    newBlock.create.push(d);
   }

  } else if (block.featureName === 'Farmer') {
   const initData = block.create[0];


   const d = {
    "id": farmerId,
    "details": `{\"1002\":\"${surveyId}\",\"52a3df45-4afd-4cfd-a713-6fc0d708ab58\":\"88\",\"1f13e2f9-a597-4262-9023-0cf084553515\":\"${faker.address.streetAddress()}\",\"93683819-bf06-496b-ae81-65607ba66b5a\":\"${faker.name.findName()}\",\"971fcc70-cb6a-416d-80be-7bfc9cf1629f\":\"eew\",\"1006\":\"41333962-8032-432d-aa80-e1db6a6769a9\",\"b3cc5e8c-8197-4dd2-81b6-2993aeef7629\":\"xz\",\"6a69c573-b730-4c2b-be8d-feb1f80bb411\":\"16823f59-af0d-40ec-a0dc-2f0257d276db\",\"a32dc594-4542-4163-80ed-edd1bb21da2c\":\"a38acf13-1d0a-403c-af42-79e657d379fe\"}`,
    "createdBy": initData.createdBy,
    "updatedBy": initData.updatedBy,
    "createdAt": initData.createdAt,
    "updatedAt": initData.updatedAt,
    "lastSyncedTime": initData.lastSyncedTime,
    "survey": surveyId
   };

   if (i === 0) {
    farmerBlock.create.push(d);
    genArr.push(farmerBlock);
   } else {
    const newBlock = _.find(genArr, el => el.featureName === 'Farmer');
    newBlock.create.push(d);
   }

  } else if (block.featureName === 'LandParcel') {
   const initData = block.create[0];


   const d = {
    "id": landParcelId,
    "farmer": farmerId,
    "address": initData.address,
    "gnd": initData.gnd,
    "survey": surveyId,
    "createdBy": initData.createdBy,
    "updatedBy": initData.updatedBy,
    "createdAt": initData.createdAt,
    "updatedAt": initData.updatedAt,
    "lastSyncedTime": initData.lastSyncedTime,
    "landPoints": initData.landPoints
   }

   if (i === 0) {
    landParcelBlock.create.push(d);
    genArr.push(landParcelBlock);
   } else {
    const newBlock = _.find(genArr, el => el.featureName === 'LandParcel');
    newBlock.create.push(d);
   }

  } else if (block.featureName === 'SurveyAnswer') {
   const initData = block.create;
   const dataArr = [];
   block.create.forEach((ans) => {


    const d = {
     "id": uuid.v4(),
     "survey": surveyId,
     "questionId": ans.questionId,
     "tabId": ans.tabId,
     "details": ans.details,
     "createdBy": ans.createdBy,
     "updatedBy": ans.updatedBy,
     "createdAt": ans.createdAt,
     "updatedAt": ans.updatedAt,
     "lastSyncedTime": ans.lastSyncedTime,
    }

    dataArr.push(d);
   });

   const landDepend = [
    {
     "id": uuid.v4(),
     "survey": surveyId,
     "questionId": "09f4bb2f-8179-480f-a28e-c953f8b3d5b7",
     "tabId": "09f4bb2f-8179-480f-a28e-c953f8b3d5b7",
     "details": `[{\"id\":\"${landParcelId}\",\"answers\":[{\"type\":\"already_planted\",\"crops\":[{\"crop_id\":\"d4a263a8-87fd-49e8-97ec-7b128e24c54c\",\"crop_name\":\"ග්ලිරිසීඩියා \",\"crop_details\":[{\"created_date\":\"2018-08-07\",\"data\":[{\"id\":\"d0201775-d594-4874-b21e-e1dcace67453\",\"value\":8},{\"id\":\"2432fdca-d98c-4de6-a651-27906b44a228\",\"value\":\"2018-08-07\"},{\"id\":\"0f20a0b7-75ed-40f3-b434-909745a7be3e\",\"value\":\"e326ed76-ea45-4346-abfa-969cbacd8ca7\"},{\"id\":\"ebbfd262-55be-4a64-a1fb-871847e74e7e\",\"value\":8},{\"id\":\"a7893177-2633-4e0c-b1aa-32ef10f12c36\",\"value\":5}]}]}]},{\"type\":\"future_planted\",\"crops\":[]}]}]`,
     "createdBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
     "updatedBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
     "createdAt": "2018-08-07T12:48:22.300Z",
     "updatedAt": "2018-08-07T12:48:22.299Z",
     "lastSyncedTime": "2000-01-08T13:57:47.000Z"
    },
    {
     "id": uuid.v4(),
     "survey": surveyId,
     "questionId": "2da70cb5-f629-4bb0-8b4d-eed09f39a11c",
     "tabId": "2da70cb5-f629-4bb0-8b4d-eed09f39a11c",
     "details": `[{\"id\":\"${landParcelId}\",\"65668ab3-4ed0-4fbf-ac5b-33eb9a8f5575\":\"637d4481-ab53-4066-b3c6-ef230c80eb1a\",\"c8cd7c01-a787-4875-8a5b-0d1597dfcedd\":\"8cd9709b-13a6-4fc2-8bab-ec20e85b98af\",\"09728e0c-1f69-48d5-943b-7f27abda221d\":\"5\"}]`,
     "createdBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
     "updatedBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
     "createdAt": "2018-08-07T12:48:22.300Z",
     "updatedAt": "2018-08-07T12:48:22.299Z",
     "lastSyncedTime": "2000-01-08T13:57:47.000Z"
    },
    {
     "id": uuid.v4(),
     "survey": surveyId,
     "questionId": "e871cdae-27d9-438f-ba07-23446857a876",
     "tabId": "e871cdae-27d9-438f-ba07-23446857a876",
     "details": `[{\"id\":\"${landParcelId}\",\"answers\":\"[{\\\"id\\\":0,\\\"isLastElement\\\":true,\\\"lat\\\":6.906425051195635,\\\"lng\\\":79.85353320837021},{\\\"id\\\":1,\\\"isLastElement\\\":false,\\\"lat\\\":6.906261625098458,\\\"lng\\\":79.8527168110013},{\\\"id\\\":2,\\\"isLastElement\\\":false,\\\"lat\\\":6.905857220154988,\\\"lng\\\":79.85300984233618}]\",\"address\":false,\"gndivision\":\"16823f59-af0d-40ec-a0dc-2f0257d276db\"}]`,
     "createdBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
     "updatedBy": "d81a33cf-1788-420a-8145-1d5fd49355f1",
     "createdAt": "2018-08-07T12:48:22.300Z",
     "updatedAt": "2018-08-07T12:48:22.299Z",
     "lastSyncedTime": "2000-01-08T13:57:47.000Z"
    }
   ]

   dataArr.push(...landDepend);

   if (i === 0) {
    surveyAnswerBlock.create.push(...dataArr);
    genArr.push(surveyAnswerBlock);
   } else {
    const newBlock = _.find(genArr, el => el.featureName === 'SurveyAnswer');
    newBlock.create.push(...dataArr);
   }
  }
 });

 fs.writeFile('./processed.json', JSON.stringify(genArr), (err) => { });

}
