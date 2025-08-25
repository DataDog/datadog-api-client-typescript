/**
 * Search tests events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityTestsApi(configuration);

const params: v2.CIVisibilityTestsApiSearchCIAppTestEventsRequest = {
  body: {
    filter: {
      from: "now-15m",
      query: "@test.service:web-ui-tests AND @test.status:skip",
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
};

apiInstance
  .searchCIAppTestEvents(params)
  .then((data: v2.CIAppTestEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
