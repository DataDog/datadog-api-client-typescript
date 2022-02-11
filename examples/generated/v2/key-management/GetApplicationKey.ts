import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.KeyManagementApi(configuration);

let params:v2.KeyManagementApiGetApplicationKeyRequest = {
  // string | The ID of the application key.
  appKeyId: "app_key_id_example",
  // string | Resource path for related resources to include in the response. Only `owned_by` is supported. (optional)
  include: "owned_by",
};

apiInstance.getApplicationKey(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
