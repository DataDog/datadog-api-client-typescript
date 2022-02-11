import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params:v2.UsersApiCreateUserRequest = {
  // UserCreateRequest
  body: {
    data: {
      attributes: {
        email: "jane.doe@example.com",
        name: "name_example",
        title: "title_example",
      },
      relationships: {
        roles: {
          data: [
            {
              id: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
              type: "roles",
            },
          ],
        },
      },
      type: "users",
    },
  },
};

apiInstance.createUser(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
