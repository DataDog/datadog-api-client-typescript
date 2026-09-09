/**
 * Get a list of security signals returns "OK" response
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
