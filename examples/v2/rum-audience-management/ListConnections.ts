/**
 * List connections returns "Successful response with list of connections" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listConnections"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiListConnectionsRequest = {
  entity: "users",
};

apiInstance
  .listConnections(params)
  .then((data: v2.ListConnectionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
