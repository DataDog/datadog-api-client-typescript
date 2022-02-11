import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiUpdateLogsMetricRequest = {
  // string | The name of the log-based metric.
  metricId: "metric_id_example",
  // LogsMetricUpdateRequest | New definition of the log-based metric.
  body: {
    data: {
      attributes: {
        filter: {
          query: "service:web* AND @http.status_code:[200 TO 299]",
        },
        groupBy: [
          {
            path: "@http.status_code",
            tagName: "status_code",
          },
        ],
      },
      type: "logs_metrics",
    },
  },
};

apiInstance.updateLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
