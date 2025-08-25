/**
 * Get a list of security signals returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiSearchSecurityMonitoringSignalsRequest = {
  body: {
    filter: {
      from: new Date(2019, 1, 2, 9, 42, 36, 320000),
      query: "security:attack status:high",
      to: new Date(2019, 1, 3, 9, 42, 36, 320000),
    },
    page: {
      cursor:
        "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
      limit: 25,
    },
    sort: "timestamp",
  },
};

apiInstance
  .searchSecurityMonitoringSignals(params)
  .then((data: v2.SecurityMonitoringSignalsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
