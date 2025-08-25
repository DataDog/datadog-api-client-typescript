/**
 * Search spans returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansApi(configuration);

const params: v2.SpansApiListSpansRequest = {
  body: {
    data: {
      attributes: {
        filter: {
          from: "now-15m",
          query: "*",
          to: "now",
        },
        options: {
          timezone: "GMT",
        },
        page: {
          limit: 25,
        },
        sort: "timestamp",
      },
      type: "search_request",
    },
  },
};

apiInstance
  .listSpans(params)
  .then((data: v2.SpansListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
