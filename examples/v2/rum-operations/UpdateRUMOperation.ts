/**
 * Update a RUM operation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateRUMOperation"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiUpdateRUMOperationRequest = {
  body: {
    data: {
      attributes: {
        applicationId: undefined,
        category: undefined,
        description: undefined,
        displayName: "Checkout completed",
        featureIds: [],
        journeyRum: {
          rumSteps: [
            {
              composite: {
                kind: "all_of",
                maxWindowMs: 30000,
                predicates: [
                  {
                    query: "@type:action @action.type:click",
                  },
                ],
              },
              nodes: [
                {
                  query: "@type:action @action.type:click",
                },
              ],
              type: "start",
            },
          ],
        },
        name: "checkout_completed",
        tags: ["team:checkout"],
      },
      id: "abc12345-1234-5678-abcd-ef1234567890",
      type: "operations",
    },
  },
  operationId: "operation_id",
};

apiInstance
  .updateRUMOperation(params)
  .then((data: v2.RUMOperationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
