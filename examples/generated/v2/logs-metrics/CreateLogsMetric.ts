import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiCreateLogsMetricRequest = {
  // LogsMetricCreateRequest | The definition of the new log-based metric.
  body: {
    data: {
      attributes: {
        compute: {
          aggregationType: "distribution",
          path: "@duration",
        },
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
      id: "logs.page.load.count",
      type: "logs_metrics",
    },
  },
};

apiInstance.createLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
