/**
 * Update a widget returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WidgetsApi(configuration);

const params: v2.WidgetsApiUpdateWidgetRequest = {
  body: {
    data: {
      attributes: {
        definition: {
          title: "My Widget",
          type: "bar_chart",
        },
        tags: [],
      },
      type: "widgets",
    },
  },
  experienceType: "ccm_reports",
  uuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateWidget(params)
  .then((data: v2.WidgetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
