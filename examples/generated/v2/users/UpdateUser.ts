import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.UsersApi(configuration);

let params: v2.UsersApiUpdateUserRequest = {
  // string | The ID of the user.
  userId: "00000000-0000-0000-0000-000000000000",
  // UserUpdateRequest
  body: {
    data: {
      attributes: {
        disabled: true,
        email: "email_example",
        name: "name_example",
      },
      id: "00000000-0000-0000-0000-000000000000",
      type: "users",
    },
  },
};

apiInstance
  .updateUser(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
