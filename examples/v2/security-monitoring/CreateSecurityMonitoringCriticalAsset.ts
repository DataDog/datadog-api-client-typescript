/**
 * Create a critical asset returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringCriticalAssetRequest =
  {
    body: {
      data: {
        type: "critical_assets",
        attributes: {
          query: "host:examplesecuritymonitoring",
          ruleQuery:
            "type:(log_detection OR signal_correlation OR workload_security OR application_security) source:cloudtrail",
          severity: "decrease",
          tags: ["team:security", "env:test"],
        },
      },
    },
  };

apiInstance
  .createSecurityMonitoringCriticalAsset(params)
  .then((data: v2.SecurityMonitoringCriticalAssetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
