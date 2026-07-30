/**
 * Create a RUM operation strong link returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createRUMOperationStrongLink"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiCreateRUMOperationStrongLinkRequest = {
  body: {
    data: {
      attributes: {
        description: undefined,
        featureId: "feature-123",
        operationId: "abc12345-1234-5678-abcd-ef1234567890",
        status: "CONFIRMED",
        tags: [],
      },
      type: "strong_links",
    },
  },
};

apiInstance
  .createRUMOperationStrongLink(params)
  .then((data: v2.RUMOperationStrongLinkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
