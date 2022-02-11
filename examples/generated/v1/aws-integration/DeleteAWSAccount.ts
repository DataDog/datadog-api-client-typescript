import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params:v1.AWSIntegrationApiDeleteAWSAccountRequest = {
  // AWSAccountDeleteRequest | AWS request object
  body: {
    accessKeyId: "accessKeyId_example",
    accountId: "1234567",
    roleName: "DatadogAWSIntegrationRole",
  },
};

apiInstance.deleteAWSAccount(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
