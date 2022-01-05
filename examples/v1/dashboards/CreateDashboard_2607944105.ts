/**
 * Create a new dashboard with check_status widget
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiCreateDashboardRequest = {
  body: {
title: "Example-Create_a_new_dashboard_with_check_status_widget",
description: "",
widgets: [
{
layout: {
x: 0,
y: 0,
width: 15,
height: 8,
},
definition: {
titleSize: "16",
titleAlign: "left",
type: "check_status",
check: "datadog.agent.up",
grouping: "check",
tags: [
"*",
],
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