/**
 * Get a list of tests events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityTestsApi(configuration);

const params: v2.CIVisibilityTestsApiListCIAppTestEventsRequest = {
  filterQuery: "@test.service:web-ui-tests",
  filterFrom: new Date(new Date().getTime() + -30 * 1000),
  filterTo: new Date(),
  pageLimit: 5,
};

apiInstance
  .listCIAppTestEvents(params)
  .then((data: v2.CIAppTestEventsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
