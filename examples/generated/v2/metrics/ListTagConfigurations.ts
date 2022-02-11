import { v2 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v2.createConfiguration();
const apiInstance = new v2.MetricsApi(configuration);

let params:v2.MetricsApiListTagConfigurationsRequest = {
  // boolean | Filter metrics that have configured tags. (optional)
  filterConfigured: true,
  // string | Filter tag configurations by configured tags. (optional)
  filterTagsConfigured: "app",
  // MetricTagConfigurationMetricTypes | Filter tag configurations by metric type. (optional)
  filterMetricType: "count",
  // boolean | Filter distributions with additional percentile aggregations enabled or disabled. (optional)
  filterIncludePercentiles: true,
  // string | Filter metrics that have been submitted with the given tags. Supports boolean and wildcard expressions. Cannot be combined with other filters. (optional)
  filterTags: "env IN (staging,test) AND service:web",
  // number | The number of seconds of look back (from now) to apply to a filter[tag] query. Defaults value is 3600 (1 hour), maximum value is 172,800 (2 days). (optional)
  windowSeconds: 3600,
};

apiInstance.listTagConfigurations(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
