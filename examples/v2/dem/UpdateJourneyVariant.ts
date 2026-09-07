/**
 * Update a DEM journey variant returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiUpdateJourneyVariantRequest = {
  body: {
    data: {
      attributes: {
        filter: "device.type:mobile",
        name: "Mobile checkout",
        rumSteps: [
          {
            nodes: [
              {
                query: "action.name:'checkout'",
              },
            ],
            type: "start",
          },
          {
            nodes: [
              {
                query: "action.name:'confirmation'",
              },
            ],
            type: "stop",
          },
        ],
      },
      type: "variants",
    },
  },
  variantId: "variant_id",
};

apiInstance
  .updateJourneyVariant(params)
  .then((data: v2.DemVariantResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
