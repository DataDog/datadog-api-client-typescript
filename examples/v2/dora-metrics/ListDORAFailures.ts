/**
 * Get a list of failure events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiListDORAFailuresRequest = {
  body: {
    data: {
      attributes: {
        from: new Date(2025, 3, 23, 0, 0, 0, 0),
        limit: 1,
        to: new Date(2025, 3, 24, 0, 0, 0, 0),
      },
      type: "dora_failures_list_request",
    },
  },
};

apiInstance
  .listDORAFailures(params)
  .then((data: v2.DORAListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
