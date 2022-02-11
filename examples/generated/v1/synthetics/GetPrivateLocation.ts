import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

let params:v1.SyntheticsApiGetPrivateLocationRequest = {
  // string | The ID of the private location.
  locationId: "location_id_example",
};

apiInstance.getPrivateLocation(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
