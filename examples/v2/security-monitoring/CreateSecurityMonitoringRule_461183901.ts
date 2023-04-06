/**
 * Create a detection rule with type 'impossible_travel' returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiCreateSecurityMonitoringRuleRequest = {
  body: {
    queries: [
      {
        aggregation: "geo_data",
        groupByFields: ["@usr.id"],
        distinctFields: [],
        metric: "@network.client.geoip",
        query: "*",
      },
    ],
    cases: [
      {
        name: "",
        status: "info",
        notifications: [],
      },
    ],
    hasExtendedTitle: true,
    message: "test",
    isEnabled: true,
    options: {
      maxSignalDuration: 86400,
      evaluationWindow: 900,
      keepAlive: 3600,
      detectionMethod: "impossible_travel",
      impossibleTravelOptions: {
        baselineUserLocations: false,
      },
    },
    name: "Example-Security-Monitoring",
    type: "log_detection",
    tags: [],
    filters: [],
  },
};

apiInstance
  .createSecurityMonitoringRule(params)
  .then((data: v2.SecurityMonitoringRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
