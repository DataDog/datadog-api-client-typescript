/**
 * Update a security filter returns "OK" response
 */

import { v2 } from "@datadog/datadog-api-client";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

// there is a valid "security_filter" in the system
let SECURITY_FILTER_DATA_ID = process.env.SECURITY_FILTER_DATA_ID as string;

let params: v2.SecurityMonitoringApiUpdateSecurityFilterRequest = {
  body: {
    data: {
      attributes: {
        exclusionFilters: [],
        filteredDataType: "logs",
        isEnabled: true,
        name: "Test-Example-Update_a_security_filter_returns_OK_response",
        query: "service:TestExampleUpdateasecurityfilterreturnsOKresponse",
        version: 1,
      },
      type: "security_filters",
    },
  },
  securityFilterId: SECURITY_FILTER_DATA_ID,
};

apiInstance
  .updateSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
