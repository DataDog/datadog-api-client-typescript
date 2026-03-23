/**
 * Update Test Optimization service settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateTestOptimizationServiceSettings"] =
  true;
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiUpdateTestOptimizationServiceSettingsRequest =
  {
    body: {
      data: {
        attributes: {
          autoTestRetriesEnabled: false,
          codeCoverageEnabled: false,
          earlyFlakeDetectionEnabled: false,
          env: "prod",
          failedTestReplayEnabled: false,
          prCommentsEnabled: true,
          repositoryId: "github.com/datadog/shopist",
          serviceName: "shopist",
          testImpactAnalysisEnabled: false,
        },
        type: "test_optimization_update_service_settings_request",
      },
    },
  };

apiInstance
  .updateTestOptimizationServiceSettings(params)
  .then((data: v2.TestOptimizationServiceSettingsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
