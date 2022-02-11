import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiUpdateSecurityFilterRequest = {
  // string | The ID of the security filter.
  securityFilterId: "security_filter_id_example",
  // SecurityFilterUpdateRequest | New definition of the security filter.
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
        name: "Custom security filter",
        query: "service:api",
        version: 1,
      },
      type: "security_filters",
    },
  },
};

apiInstance
  .updateSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
