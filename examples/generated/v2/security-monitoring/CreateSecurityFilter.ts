import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

let params: v2.SecurityMonitoringApiCreateSecurityFilterRequest = {
  // SecurityFilterCreateRequest | The definition of the new security filter.
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
      },
      type: "security_filters",
    },
  },
};

apiInstance
  .createSecurityFilter(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
