/**
 * Get all powerpacks returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.PowerpackApi(configuration);

const params: v2.PowerpackApiListPowerpacksRequest = {
  pageLimit: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listPowerpacksWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
