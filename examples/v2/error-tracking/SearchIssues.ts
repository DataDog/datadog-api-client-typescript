/**
 * Search error tracking issues returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ErrorTrackingApi(configuration);

const params: v2.ErrorTrackingApiSearchIssuesRequest = {
  body: {
    data: {
      attributes: {
        query: "service:orders-* AND @language:go",
        from: 1671612804000,
        to: 1671620004000,
        track: "trace",
      },
      type: "search_request",
    },
  },
};

apiInstance
  .searchIssues(params)
  .then((data: v2.IssuesSearchResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
