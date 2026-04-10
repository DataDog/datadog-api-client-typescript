/**
 * List Bits AI investigations returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listInvestigations"] = true;
const apiInstance = new v2.BitsAIApi(configuration);

(async () => {
  try {
    for await (const item of apiInstance.listInvestigationsWithPagination()) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
