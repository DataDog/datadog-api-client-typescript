import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params:v2.MetricsApiUpdateTagConfigurationRequest = {
  // string | The name of the metric.
  metricName: "dist.http.endpoint.request",
  // MetricTagConfigurationUpdateRequest
  body: {
    data: {
      attributes: {
        aggregations: [
          {
            space: "sum",
            time: "sum",
          },
        ],
        includePercentiles: true,
        tags: ["app","datacenter"],
      },
      id: "test.metric.latency",
      type: "manage_tags",
    },
  },
};

apiInstance.updateTagConfiguration(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
