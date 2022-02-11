import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.KeyManagementApi(configuration);

let params:v1.KeyManagementApiCreateAPIKeyRequest = {
  // ApiKey
  body: {
    name: "example user",
  },
};

apiInstance.createAPIKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
