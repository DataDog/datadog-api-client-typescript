/**
 * List findings returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listFindings"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listFindingsWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
