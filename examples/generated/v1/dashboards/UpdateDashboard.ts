import { v1 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v1.createConfiguration();
const apiInstance = new v1.DashboardsApi(configuration);

let params: v1.DashboardsApiUpdateDashboardRequest = {
  // string | The ID of the dashboard.
  dashboardId: "dashboard_id_example",
  // Dashboard | Update Dashboard request body.
  body: {
    description: "description_example",
    isReadOnly: false,
    layoutType: "ordered",
    notifyList: ["notifyList_example"],
    reflowType: "auto",
    restrictedRoles: ["restrictedRoles_example"],
    templateVariablePresets: [
      {
        name: "name_example",
        templateVariables: [
          {
            name: "name_example",
            value: "value_example",
          },
        ],
      },
    ],
    templateVariables: [
      {
        availableValues: ["my-host", "host1", "host2"],
        _default: "my-host",
        name: "host1",
        prefix: "host",
      },
    ],
    title: "",
    widgets: [
      {
        definition: {
          alertId: "",
          time: {
            liveSpan: "5m",
          },
          title: "title_example",
          titleAlign: "center",
          titleSize: "titleSize_example",
          type: "alert_graph",
          vizType: "timeseries",
        },
        id: 1,
        layout: {
          height: 0,
          isColumnBreak: true,
          width: 0,
          x: 0,
          y: 0,
        },
      },
    ],
  },
};

apiInstance
  .updateDashboard(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
