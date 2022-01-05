/**
 * Create a new dashboard returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
layoutType: "ordered",
title: "Example-Create_a_new_dashboard_returns_OK_response with Profile Metrics Query",
widgets: [
{
definition: {
type: "timeseries",
requests: [
{
profileMetricsQuery: {
compute: {
aggregation: "sum",
facet: "@prof_core_cpu_cores",
},
search: {
query: "runtime:jvm",
},
groupBy: [
{
facet: "service",
limit: 10,
sort: {
aggregation: "sum",
order: "desc",
facet: "@prof_core_cpu_cores",
},
},
],
},
},
],
},
},
],
},
  
};

apiInstance
  .createDashboard(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));