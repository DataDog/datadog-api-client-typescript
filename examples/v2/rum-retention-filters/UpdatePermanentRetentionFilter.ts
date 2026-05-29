/**
 * Update a permanent RUM retention filter returns "Updated" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RumRetentionFiltersApi(configuration);

const params: v2.RumRetentionFiltersApiUpdatePermanentRetentionFilterRequest = {
  body: {
    data: {
      attributes: {
        crossProductSampling: {
          traceEnabled: true,
          traceSampleRate: 25.0,
        },
      },
      id: "synthetics_sessions",
      type: "permanent_retention_filters",
    },
  },
  appId: "app_id",
  permanentRfId: "synthetics_sessions",
};

apiInstance
  .updatePermanentRetentionFilter(params)
  .then((data: v2.RumPermanentRetentionFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
