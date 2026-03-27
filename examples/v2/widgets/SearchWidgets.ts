/**
 * Search widgets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WidgetsApi(configuration);

const params: v2.WidgetsApiSearchWidgetsRequest = {
  experienceType: "ccm_reports",
};

apiInstance
  .searchWidgets(params)
  .then((data: v2.WidgetListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
