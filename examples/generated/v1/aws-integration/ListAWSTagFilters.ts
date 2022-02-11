import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.AWSIntegrationApi(configuration);

let params:v1.AWSIntegrationApiListAWSTagFiltersRequest = {
  // string | Only return AWS filters that matches this `account_id`.
  accountId: "account_id_example",
};

apiInstance.listAWSTagFilters(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
