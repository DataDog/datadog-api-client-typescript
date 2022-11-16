/**
 * Search pipelines events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiSearchCIAppPipelineEventsRequest = {
  body: {
    filter: {
      from: "now-15m",
      query: "@ci.provider.name:github AND @ci.status:error",
      to: "now",
    },
    options: {
      timezone: "GMT",
    },
    page: {
      limit: 5,
    },
    sort: "timestamp",
  },
};

apiInstance
  .searchCIAppPipelineEvents(params)
  .then((data: v2.CIAppPipelineEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
