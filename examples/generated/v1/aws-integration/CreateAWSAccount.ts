import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params:v1.AWSIntegrationApiCreateAWSAccountRequest = {
  // AWSAccount | AWS Request Object
  body: {
    accessKeyId: "accessKeyId_example",
    accountId: "1234567",
    accountSpecificNamespaceRules: {
      "key": true,
    },
    cspmResourceCollectionEnabled: true,
    excludedRegions: ["us-east-1","us-west-2"],
    filterTags: ["<KEY>:<VALUE>"],
    hostTags: ["<KEY>:<VALUE>"],
    metricsCollectionEnabled: false,
    resourceCollectionEnabled: true,
    roleName: "DatadogAWSIntegrationRole",
    secretAccessKey: "secretAccessKey_example",
  },
};

apiInstance.createAWSAccount(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
