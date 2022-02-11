import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsMetricsApi(configuration);

let params:v2.LogsMetricsApiGetLogsMetricRequest = {
  // string | The name of the log-based metric.
  metricId: "metric_id_example",
};

apiInstance.getLogsMetric(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
