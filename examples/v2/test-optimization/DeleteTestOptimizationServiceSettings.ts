/**
 * Delete Test Optimization service settings returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteTestOptimizationServiceSettings"] =
  true;
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiDeleteTestOptimizationServiceSettingsRequest =
  {
    body: {
      data: {
        attributes: {
          env: "prod",
          repositoryId: "github.com/datadog/shopist",
          serviceName: "shopist",
        },
        type: "test_optimization_delete_service_settings_request",
      },
    },
  };

apiInstance
  .deleteTestOptimizationServiceSettings(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
