import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MonitorsApi(configuration);

let params:v1.MonitorsApiValidateMonitorRequest = {
  // Monitor | Monitor request object
  body: {
    message: "message_example",
    name: "My monitor",
    options: {
      enableLogsSample: true,
      escalationMessage: "none",
      evaluationDelay: 1,
      groupbySimpleMonitor: true,
      includeTags: true,
      locked: true,
      minFailureDuration: 0,
      minLocationFailed: 1,
      newGroupDelay: 1,
      newHostDelay: 300,
      noDataTimeframe: 1,
      notifyAudit: false,
      notifyNoData: false,
      renotifyInterval: 1,
      renotifyOccurrences: 1,
      renotifyStatuses: [
        "alert",
      ],
      requireFullWindow: true,
      silenced: {
        "key": 1,
      },
      syntheticsCheckId: "syntheticsCheckId_example",
      thresholdWindows: {
        recoveryWindow: "recoveryWindow_example",
        triggerWindow: "triggerWindow_example",
      },
      thresholds: {
        critical: 3.14,
        criticalRecovery: 3.14,
        ok: 3.14,
        unknown: 3.14,
        warning: 3.14,
        warningRecovery: 3.14,
      },
      timeoutH: 1,
      variables: [
        {
    compute: {
      aggregation: "avg",
      interval: 60000,
      metric: "@duration",
    },
    dataSource: "rum",
    groupBy: [
      {
        facet: "status",
        limit: 10,
        sort: {
          aggregation: "avg",
          metric: "metric_example",
          order: "desc",
        },
      },
    ],
    indexes: ["days-3","days-7"],
    name: "query_errors",
    search: {
      query: "service:query",
    },
  },
      ],
    },
    priority: 1,
    query: "avg(last_5m):sum:system.net.bytes_rcvd{host:host0} > 100",
    restrictedRoles: [
      "restrictedRoles_example",
    ],
    tags: [
      "tags_example",
    ],
    type: "query alert",
  },
};

apiInstance.validateMonitor(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
