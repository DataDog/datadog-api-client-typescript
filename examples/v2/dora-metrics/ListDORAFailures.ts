/**
 * Get a list of incident events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.DORAMetricsApi(configuration);

const params: v2.DORAMetricsApiListDORAFailuresRequest = {
  body: {
    data: {
      attributes: {
        from: new Date(2025, 1, 1, 0, 0, 0, 0),
        limit: 100,
        query: "severity:(SEV-1 OR SEV-2) env:production team:backend",
        sort: "-started_at",
        to: new Date(2025, 1, 31, 23, 59, 59, 0),
      },
      type: "dora_failures_list_request",
    },
  },
};

apiInstance
  .listDORAFailures(params)
  .then((data: v2.DORAFailuresListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
