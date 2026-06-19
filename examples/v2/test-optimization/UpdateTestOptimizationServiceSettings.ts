/**
 * Update Test Optimization service settings returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.TestOptimizationApi(configuration);

const params: v2.TestOptimizationApiUpdateTestOptimizationServiceSettingsRequest =
  {
    body: {
      data: {
        attributes: {
          autoTestRetriesEnabled: false,
          autoTestRetriesEnabledInherit: false,
          codeCoverageEnabled: false,
          codeCoverageEnabledInherit: false,
          earlyFlakeDetectionEnabled: false,
          earlyFlakeDetectionEnabledInherit: false,
          env: "prod",
          failedTestReplayEnabled: false,
          failedTestReplayEnabledInherit: false,
          prCommentsEnabled: false,
          repositoryId: "github.com/datadog/shopist",
          serviceName: "shopist",
          testImpactAnalysisEnabled: true,
          testImpactAnalysisEnabledInherit: true,
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
