/**
 * Create a retention filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.APMRetentionFiltersApi(configuration);

const params: v2.APMRetentionFiltersApiCreateApmRetentionFilterRequest = {
  body: {
    data: {
      attributes: {
        enabled: true,
        filter: {
          query: "@http.status_code:200 service:my-service",
        },
        filterType: "spans-sampling-processor",
        name: "my retention filter",
        rate: 1.0,
      },
      type: "apm_retention_filter",
    },
  },
};

apiInstance
  .createApmRetentionFilter(params)
  .then((data: v2.RetentionFilterCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
