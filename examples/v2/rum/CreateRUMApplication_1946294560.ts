/**
 * Create a new RUM application with Product Scales returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiCreateRUMApplicationRequest = {
  body: {
    data: {
      attributes: {
        name: "test-rum-with-product-scales-5c67ebb32077e1d9",
        type: "browser",
        rumEventProcessingState: "ERROR_FOCUSED_MODE",
        productAnalyticsRetentionState: "NONE",
      },
      type: "rum_application_create",
    },
  },
};

apiInstance
  .createRUMApplication(params)
  .then((data: v2.RUMApplicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
