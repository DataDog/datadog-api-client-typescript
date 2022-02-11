import { v1 } from '@datadog/datadog-api-client';
import * as fs from 'fs';

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params:v1.ServiceLevelObjectivesApiUpdateSLORequest = {
  // string | The ID of the service level objective object.
  sloId: "slo_id_example",
  // ServiceLevelObjective | The edited service level objective request object.
  body: {
    description: "description_example",
    groups: ["env:prod","role:mysql"],
    monitorIds: [
      1,
    ],
    monitorTags: [
      "monitorTags_example",
    ],
    name: "Custom Metric SLO",
    query: {
      denominator: "sum:my.custom.metric{*}.as_count()",
      numerator: "sum:my.custom.metric{type:good}.as_count()",
    },
    tags: ["env:prod","app:core"],
    thresholds: [
      {
        target: 99.9,
        targetDisplay: "99.9",
        timeframe: "30d",
        warning: 90.0,
        warningDisplay: "90.0",
      },
    ],
    type: "metric",
  },
};

apiInstance.updateSLO(params).then((data:any) => {
  console.log('API called successfully. Returned data: ' + JSON.stringify(data));
}).catch((error:any) => console.error(error));
