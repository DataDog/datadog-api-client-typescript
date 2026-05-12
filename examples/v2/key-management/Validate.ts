/**
 * Validate API key returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.validate"] = true;
const apiInstance = new v2.KeyManagementApi(configuration);

apiInstance
  .validate()
  .then((data: v2.ValidateV2Response) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
