/**
 * Get a single entity context returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSingleEntityContext"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiGetSingleEntityContextRequest = {
  id: "user@example.com",
};

apiInstance
  .getSingleEntityContext(params)
  .then((data: v2.SingleEntityContextResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
