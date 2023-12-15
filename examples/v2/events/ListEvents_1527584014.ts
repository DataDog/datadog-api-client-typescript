/**
 * Get a list of events returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiListEventsRequest = {
  filterFrom: "now-15m",
  filterTo: "now",
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listEventsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
