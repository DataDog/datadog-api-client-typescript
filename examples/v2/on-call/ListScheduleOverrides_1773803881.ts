/**
 * List On-Call schedule overrides returns "OK" response with pagination
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.OnCallApi(configuration);

const params: v2.OnCallApiListScheduleOverridesRequest = {
  scheduleId: "3653d3c6-0c75-11ea-ad28-fb5701eabc7d",
  filterStart: new Date(2024, 1, 7, 2, 53, 1, 0),
  filterEnd: new Date(2024, 1, 14, 2, 53, 1, 0),
};

(async () => {
  try {
    for await (const item of apiInstance.listScheduleOverridesWithPagination(
      params
    )) {
      console.log(item);
    }
  } catch (error) {
    console.error(error);
  }
})();
