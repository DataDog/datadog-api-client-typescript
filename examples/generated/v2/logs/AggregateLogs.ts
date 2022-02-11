import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

let params:v2.LogsApiAggregateLogsRequest = {
  // LogsAggregateRequest
  body: {
    compute: [
      {
        aggregation: "pc90",
        interval: "5m",
        metric: "@duration",
        type: "total",
      },
    ],
    filter: {
      from: "now-15m",
      indexes: ["main","web"],
      query: "service:web* AND @http.status_code:[200 TO 299]",
      to: "now",
    },
    groupBy: [
      {
        facet: "host",
        histogram: {
          interval: 10,
          max: 100,
          min: 50,
        },
        limit: 10,
        missing: "string_example",
        sort: {
          aggregation: "pc90",
          metric: "@duration",
          order: "asc",
          type: "alphabetical",
        },
        total: true,
      },
    ],
    options: {
      timeOffset: 1,
      timezone: "GMT",
    },
    page: {
      cursor: "eyJzdGFydEF0IjoiQVFBQUFYS2tMS3pPbm40NGV3QUFBQUJCV0V0clRFdDZVbG8zY3pCRmNsbHJiVmxDWlEifQ==",
    },
  },
};

apiInstance.aggregateLogs(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
