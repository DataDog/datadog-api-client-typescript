import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.UsersApi(configuration);

let params:v1.UsersApiDisableUserRequest = {
  // string | The handle of the user.
  userHandle: "test@datadoghq.com",
};

apiInstance.disableUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
