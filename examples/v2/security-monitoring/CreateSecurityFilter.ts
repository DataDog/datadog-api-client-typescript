/**
 * Create a security filter returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiCreateSecurityFilterRequest = {
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
        name: "Example-Create_a_security_filter_returns_OK_response",
        query: "service:ExampleCreateasecurityfilterreturnsOKresponse",
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
