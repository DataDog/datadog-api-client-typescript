/**
 * Get widgets from an image returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getWidgetsFromImage"] = true;
const apiInstance = new v2.StegadographyApi(configuration);

apiInstance
  .getWidgetsFromImage()
  .then((data: v2.StegadographyWidgetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
