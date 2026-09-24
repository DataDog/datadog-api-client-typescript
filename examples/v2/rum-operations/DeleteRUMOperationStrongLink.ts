/**
 * Delete a RUM operation strong link returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.deleteRUMOperationStrongLink"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiDeleteRUMOperationStrongLinkRequest = {
  rumOperationId: "rum_operation_id",
  featureId: "feature_id",
};

apiInstance
  .deleteRUMOperationStrongLink(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
