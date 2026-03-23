/**
 * Get Test Optimization service settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getTestOptimizationServiceSettings"] =
  true;
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiGetTestOptimizationServiceSettingsRequest =
  {
    body: {
      data: {
        attributes: {
          env: "prod",
          repositoryId: "github.com/datadog/shopist",
          serviceName: "shopist",
        },
        type: "test_optimization_get_service_settings_request",
      },
    },
  };

apiInstance
  .getTestOptimizationServiceSettings(params)
  .then((data: v2.TestOptimizationServiceSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
