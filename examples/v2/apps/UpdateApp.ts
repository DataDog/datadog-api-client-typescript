/**
 * Update App returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateApp"] = true;
const apiInstance = new v2.AppsApi(configuration);

// there is a valid "app" in the system
const APP_DATA_ID = process.env.APP_DATA_ID as string;

const params: v2.AppsApiUpdateAppRequest = {
  body: {
    data: {
      attributes: {
        name: "Updated Name",
        rootInstanceName: "grid0",
      },
      id: APP_DATA_ID,
      type: "appDefinitions",
    },
  },
  appId: APP_DATA_ID,
};

apiInstance
  .updateApp(params)
  .then((data: v2.UpdateAppResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
