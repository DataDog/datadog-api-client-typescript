/**
 * List action connections returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listActionConnections"] = true;
const apiInstance = new v2.ActionConnectionApi(configuration);

apiInstance
  .listActionConnections()
  .then((data: v2.ListActionConnectionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
