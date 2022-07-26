/**
 * Get a list of RUM events returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMApi(configuration);

const params: v2.RUMApiListRUMEventsRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listRUMEventsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
