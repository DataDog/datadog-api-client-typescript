import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.AuthNMappingsApi(configuration);

let params:v2.AuthNMappingsApiGetAuthNMappingRequest = {
  // string | The UUID of the AuthN Mapping.
  authnMappingId: "authn_mapping_id_example",
};

apiInstance.getAuthNMapping(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
