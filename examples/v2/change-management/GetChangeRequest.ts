/**
 * Get a change request returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getChangeRequest"] = true;
const apiInstance = new v2.ChangeManagementApi(configuration);

const params: v2.ChangeManagementApiGetChangeRequestRequest = {
  changeRequestId: "change_request_id",
};

apiInstance
  .getChangeRequest(params)
  .then((data: v2.ChangeRequestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
