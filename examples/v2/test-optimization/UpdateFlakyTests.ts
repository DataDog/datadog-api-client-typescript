/**
 * Update flaky test states returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateFlakyTests"] = true;
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiUpdateFlakyTestsRequest = {
  body: {
    data: {
      attributes: {
        tests: [
          {
            id: "4eb1887a8adb1847",
            newState: "active",
          },
        ],
      },
      type: "update_flaky_test_state_request",
    },
  },
};

apiInstance
  .updateFlakyTests(params)
  .then((data: v2.UpdateFlakyTestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
