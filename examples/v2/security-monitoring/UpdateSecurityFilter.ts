/**
 * Update a security filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_filter" in the system
const SECURITY_FILTER_DATA_ID = process.env.SECURITY_FILTER_DATA_ID as string;

const params: v2.SecurityMonitoringApiUpdateSecurityFilterRequest = {
  body: {
    data: {
      attributes: {
        exclusionFilters: [],
        filteredDataType: "logs",
        isEnabled: true,
        name: "Example-Security-Monitoring",
        query: "service:ExampleSecurityMonitoring",
        version: 1,
      },
      type: "security_filters",
    },
  },
  securityFilterId: SECURITY_FILTER_DATA_ID,
};

apiInstance
  .updateSecurityFilter(params)
  .then((data: v2.SecurityFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
