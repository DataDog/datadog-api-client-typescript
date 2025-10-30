/**
 * Get mapping returns "Successful response with entity mapping configuration" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getMapping"] = true;
const apiInstance = new v2.RumAudienceManagementApi(configuration);

const params: v2.RumAudienceManagementApiGetMappingRequest = {
  entity: "users",
};

apiInstance
  .getMapping(params)
  .then((data: v2.GetMappingResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
