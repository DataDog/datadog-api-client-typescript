/**
 * Delete Multiple Apps returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AppBuilderApi(configuration);

// there is a valid "app" in the system
const APP_DATA_ID = process.env.APP_DATA_ID as string;

const params: v2.AppBuilderApiDeleteAppsRequest = {
  body: {
    data: [
      {
        id: APP_DATA_ID,
        type: "appDefinitions",
      },
    ],
  },
};

apiInstance
  .deleteApps(params)
  .then((data: v2.DeleteAppsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
