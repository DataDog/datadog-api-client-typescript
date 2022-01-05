/**
 * Create a new dashboard with slo widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

// there is a valid "slo" in the system
let SLO_DATA_0_ID = process.env.SLO_DATA_0_ID as string;



let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
title: "Example-Create_a_new_dashboard_with_slo_widget",
description: "",
widgets: [
{
layout: {
x: 0,
y: 0,
width: 60,
height: 21,
},
definition: {
titleSize: "16",
titleAlign: "left",
type: "slo",
viewType: "detail",
timeWindows: [
"7d",
],
sloId: SLO_DATA_0_ID,
showErrorBudget: true,
viewMode: "overall",
globalTimeTarget: "0",
},
},
],
templateVariables: [
],
layoutType: "free",
isReadOnly: false,
notifyList: [
],
},
  
};

apiInstance
  .createDashboard(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));