/**
 * Preview a rule query with applied filters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiPreviewSecurityMonitoringRuleQueryRequest =
  {
    body: {
      query: "source:cloudtrail",
      queryIndex: 0,
      filters: [],
      type: "log_detection",
      detectionMethod: "threshold",
      dataSource: "logs",
      groupByFields: [],
      distinctFields: [],
    },
  };

apiInstance
  .previewSecurityMonitoringRuleQuery(params)
  .then((data: v2.SecurityMonitoringRuleLivetailResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
