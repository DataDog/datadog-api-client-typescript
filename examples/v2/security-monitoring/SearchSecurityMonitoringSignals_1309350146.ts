/**
 * Get a list of security signals returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {
  body: {
    filter: {
      from: new Date(new Date().getTime() + -15 * 60 * 1000),
      query: "security:attack status:high",
      to: new Date(),
    },
    page: {
      limit: 2,
    },
    sort: "timestamp",
  },
};

(async () => {
  try {
    for await (const item of apiInstance.searchSecurityMonitoringSignalsWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
