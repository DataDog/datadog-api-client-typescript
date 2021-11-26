/**
 * Validate a monitor returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params: v1.MonitorsApiValidateMonitorRequest = {
  body: {
    name: "Example-Validate_a_monitor_returns_OK_response",
    type: "log alert",
    query: `logs("service:foo AND type:error").index("main").rollup("count").by("source").last("5m") > 2`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplevalidateamonitorreturnsokresponse", "env:ci"],
    priority: 3,
    options: {
      enableLogsSample: true,
      escalationMessage: "the situation has escalated",
      evaluationDelay: 700,
      groupbySimpleMonitor: true,
      includeTags: true,
      locked: false,
      newHostDelay: 600,
      noDataTimeframe: undefined,
      notifyAudit: false,
      notifyNoData: false,
      renotifyInterval: 60,
      requireFullWindow: true,
      timeoutH: 24,
      thresholds: {
        critical: 2,
        warning: 1,
      },
    },
  },
};

apiInstance
  .validateMonitor(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
