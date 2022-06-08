/**
 * List roles returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RolesApi(configuration);

// there is a valid "role" in the system
const ROLE_DATA_ATTRIBUTES_NAME = process.env
  .ROLE_DATA_ATTRIBUTES_NAME as string;

const params: v2.RolesApiListRolesRequest = {
  filter: ROLE_DATA_ATTRIBUTES_NAME,
};

apiInstance
  .listRoles(params)
  .then((data: v2.RolesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
