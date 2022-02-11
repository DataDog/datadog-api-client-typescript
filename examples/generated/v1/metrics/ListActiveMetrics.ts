import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.MetricsApi(configuration);

let params:v1.MetricsApiListActiveMetricsRequest = {
  // number | Seconds since the Unix epoch.
  from: 1,
  // string | Hostname for filtering the list of metrics returned. If set, metrics retrieved are those with the corresponding hostname tag. (optional)
  host: "host_example",
  // string | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters. (optional)
  tagFilter: "env IN (staging,test) AND service:web",
};

apiInstance.listActiveMetrics(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
