import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params:v1.AWSIntegrationApiUpdateAWSAccountRequest = {
  // AWSAccount | AWS request object
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
  // string | Only return AWS accounts that matches this `account_id`. (optional)
  accountId: "account_id_example",
  // string | Only return AWS accounts that match this `role_name`. Required if `account_id` is specified. (optional)
  roleName: "role_name_example",
  // string | Only return AWS accounts that matches this `access_key_id`. Required if none of the other two options are specified. (optional)
  accessKeyId: "access_key_id_example",
};

apiInstance.updateAWSAccount(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
