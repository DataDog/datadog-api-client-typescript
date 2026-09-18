/**
 * Validate dashboard widgets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.validateDashboardWidgets"] = true;
const apiInstance = new v2.DashboardsApi(configuration);

const params: v2.DashboardsApiValidateDashboardWidgetsRequest = {
  body: {
    layoutType: "ordered",
    reflowType: "auto",
    widgets: [
      {
        definition: "{'content': 'Valid note', 'type': 'note'}",
      },
    ],
  },
};

apiInstance
  .validateDashboardWidgets(params)
  .then((data: v2.DashboardWidgetValidationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
