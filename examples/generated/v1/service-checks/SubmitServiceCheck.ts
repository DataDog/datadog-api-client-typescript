import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceChecksApi(configuration);

let params:v1.ServiceChecksApiSubmitServiceCheckRequest = {
  // Array<ServiceCheck> | Service Check request body.
  body: [
    {
      check: "app.ok",
      hostName: "app.host1",
      message: "app is running",
      status: 0,
      tags: ["environment:test"],
      timestamp: 1,
    },
  ],
};

apiInstance.submitServiceCheck(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
