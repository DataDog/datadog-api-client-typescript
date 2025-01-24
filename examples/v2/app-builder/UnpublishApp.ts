/**
 * Unpublish App returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.unpublishApp"] = true;
const apiInstance = new v2.AppBuilderApi(configuration);

// there is a valid "app" in the system
const APP_DATA_ID = process.env.APP_DATA_ID as string;

const params: v2.AppBuilderApiUnpublishAppRequest = {
  appId: APP_DATA_ID,
};

apiInstance
  .unpublishApp(params)
  .then((data: v2.UnpublishAppResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
