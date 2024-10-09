/**
 * Validate a multi-alert monitor returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

const params: v1.MonitorsApiValidateMonitorRequest = {
  body: {
    name: "Example-Monitor",
    type: "log alert",
    query: `logs("service:foo AND type:error").index("main").rollup("count").by("source,status").last("5m") > 2`,
    message: "some message Notify: @hipchat-channel",
    tags: ["test:examplemonitor", "env:ci"],
    priority: 3,
    options: {
      enableLogsSample: true,
      escalationMessage: "the situation has escalated",
      evaluationDelay: 700,
      groupRetentionDuration: "2d",
      includeTags: true,
      locked: false,
      newHostDelay: 600,
      noDataTimeframe: undefined,
      notifyAudit: false,
      notifyBy: ["status"],
      notifyNoData: false,
      onMissingData: "show_and_notify_no_data",
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
