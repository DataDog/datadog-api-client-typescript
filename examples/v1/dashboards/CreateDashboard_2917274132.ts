/**
 * Create a new dashboard with manage_status widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
title: "Example-Create_a_new_dashboard_with_manage_status_widget",
description: "",
widgets: [
{
layout: {
x: 0,
y: 0,
width: 50,
height: 25,
},
definition: {
type: "manage_status",
summaryType: "monitors",
displayFormat: "countsAndList",
colorPreference: "text",
hideZeroCounts: true,
showLastTriggered: false,
query: "",
sort: "status,asc",
count: 50,
start: 0,
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