/**
 * Create an SLO object returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

let params: v1.ServiceLevelObjectivesApiCreateSLORequest = {
  body: {
type: "metric",
description: "string",
groups: [
"env:test",
"role:mysql",
],
monitorIds: [
],
name: "Example-Create_an_SLO_object_returns_OK_response",
query: {
denominator: "sum:httpservice.hits{!code:3xx}.as_count()",
numerator: "sum:httpservice.hits{code:2xx}.as_count()",
},
tags: [
"env:prod",
"app:core",
],
thresholds: [
{
target: 95.0,
targetDisplay: "95.0",
timeframe: "7d",
warning: 98,
warningDisplay: "98.0",
},
],
},
  
};

apiInstance
  .createSLO(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));