/**
 * Create a custom framework returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateCustomFrameworkRequest = {
  body: {
    handle: "",
    name: "",
    requirements: [
      {
        controls: [
          {
            name: "",
            ruleIds: [""],
          },
        ],
        name: "",
      },
    ],
    version: "",
  },
};

apiInstance
  .createCustomFramework(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
