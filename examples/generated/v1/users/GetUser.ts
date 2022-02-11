import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

let params:v1.UsersApiGetUserRequest = {
  // string | The ID of the user.
  userHandle: "test@datadoghq.com",
};

apiInstance.getUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
