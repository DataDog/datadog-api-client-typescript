import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params:v1.AWSIntegrationApiListAWSAccountsRequest = {
  // string | Only return AWS accounts that matches this `account_id`. (optional)
  accountId: "account_id_example",
  // string | Only return AWS accounts that matches this role_name. (optional)
  roleName: "role_name_example",
  // string | Only return AWS accounts that matches this `access_key_id`. (optional)
  accessKeyId: "access_key_id_example",
};

apiInstance.listAWSAccounts(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
