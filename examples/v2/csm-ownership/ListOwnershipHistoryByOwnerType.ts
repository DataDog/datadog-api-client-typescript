/**
 * List ownership history by owner type returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listOwnershipHistoryByOwnerType"] = true;
const apiInstance = new v2.CSMOwnershipApi(configuration);

const params: v2.CSMOwnershipApiListOwnershipHistoryByOwnerTypeRequest = {
  resourceId: "res-1",
  ownerType: "team",
};

apiInstance
  .listOwnershipHistoryByOwnerType(params)
  .then((data: v2.OwnershipHistoryResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
