/**
 * List ownership inference history for a resource returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOwnershipHistory"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiListOwnershipHistoryRequest = {
  resourceId: "res-1",
};

apiInstance
  .listOwnershipHistory(params)
  .then((data: v2.OwnershipHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
