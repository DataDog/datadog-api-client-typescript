/**
 * Get a list of pipelines events returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CIVisibilityPipelinesApi(configuration);

const params: v2.CIVisibilityPipelinesApiListCIAppPipelineEventsRequest = {
  filterFrom: new Date(new Date().getTime() + -30 * 1000),
  filterTo: new Date(),
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listCIAppPipelineEventsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
