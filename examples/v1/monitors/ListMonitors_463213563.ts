/**
 * Get all monitors returns "OK" response with pagination
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiListMonitorsRequest = {
  pageSize: 2,
};

(async () => {
  try {
    for await (const item of apiInstance.listMonitorsWithPagination(params)) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
