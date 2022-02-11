import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

let params:v2.RolesApiListRoleUsersRequest = {
  // string | The ID of the role.
  roleId: "role_id_example",
  // number | Size for a given page. (optional)
  pageSize: 10,
  // number | Specific page number to return. (optional)
  pageNumber: 0,
  // string | User attribute to order results by. Sort order is **ascending** by default. Sort order is **descending** if the field is prefixed by a negative sign, for example `sort=-name`. Options: `name`, `email`, `status`. (optional)
  sort: "name",
  // string | Filter all users by the given string. Defaults to no filtering. (optional)
  filter: "filter_example",
};

apiInstance.listRoleUsers(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
