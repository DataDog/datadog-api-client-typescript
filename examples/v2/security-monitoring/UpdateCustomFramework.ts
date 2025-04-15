/**
 * Update a custom framework returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateCustomFramework"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateCustomFrameworkRequest = {
  body: {
    data: {
      attributes: {
        handle: "",
        name: "",
        requirements: [
          {
            controls: [
              {
                name: "",
                rulesId: [""],
              },
            ],
            name: "",
          },
        ],
        version: "",
      },
      type: "custom_framework",
    },
  },
  handle: "handle",
  version: "version",
};

apiInstance
  .updateCustomFramework(params)
  .then((data: v2.RetrieveCustomFrameworkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
