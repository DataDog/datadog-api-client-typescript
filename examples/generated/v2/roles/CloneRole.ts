import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params:v2.RolesApiCloneRoleRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // RoleCloneRequest
  body: {
    data: {
      attributes: {
        name: "cloned-role",
      },
      type: "roles",
    },
  },
};

apiInstance.cloneRole(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
