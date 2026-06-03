/**
 * Get the RUM configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumConfig"] = true;
const apiInstance = new v2.RumConfigApi(configuration);

apiInstance
  .getRumConfig()
  .then((data: v2.RumConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
