/**
 * Get a list of spans returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SpansApi(configuration);

const params: v2.SpansApiListSpansGetRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listSpansGetWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
