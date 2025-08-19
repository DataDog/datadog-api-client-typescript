/**
 * Update a RUM application with Product Scales returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

// there is a valid "rum_application" in the system
const RUM_APPLICATION_DATA_ID = process.env.RUM_APPLICATION_DATA_ID as string;

const params: v2.RUMApiUpdateRUMApplicationRequest = {
  body: {
    data: {
      attributes: {
        name: "updated_rum_with_product_scales",
        rumEventProcessingState: "ALL",
        productAnalyticsRetentionState: "MAX",
      },
      id: RUM_APPLICATION_DATA_ID,
      type: "rum_application_update",
    },
  },
  id: RUM_APPLICATION_DATA_ID,
};

apiInstance
  .updateRUMApplication(params)
  .then((data: v2.RUMApplicationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
