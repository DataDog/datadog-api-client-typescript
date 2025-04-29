/**
 * Update a custom framework returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiUpdateCustomFrameworkRequest = {
  body: {
    data: {
      type: "custom_framework",
      attributes: {
        name: "name",
        handle: "create-framework-new",
        version: "10",
        iconUrl: "test-url",
        requirements: [
          {
            name: "requirement",
            controls: [
              {
                name: "control",
                rulesId: ["def-000-be9"],
              },
            ],
          },
        ],
      },
    },
  },
  handle: "create-framework-new",
  version: "10",
};

apiInstance
  .updateCustomFramework(params)
  .then((data: v2.UpdateCustomFrameworkResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
