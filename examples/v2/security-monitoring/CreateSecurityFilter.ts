/**
 * Create a security filter returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityFilterRequest = {
  body: {
    data: {
      attributes: {
        exclusionFilters: [
          {
            name: "Exclude staging",
            query: "source:staging",
          },
        ],
        filteredDataType: "logs",
        isEnabled: true,
        name: "Example-Security-Monitoring",
        query: "service:ExampleSecurityMonitoring",
      },
      type: "security_filters",
    },
  },
};

apiInstance
  .createSecurityFilter(params)
  .then((data: v2.SecurityFilterResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
