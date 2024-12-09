/**
 * List Apps returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listApps"] = true;
const apiInstance = new v2.AppsApi(configuration);

apiInstance
  .listApps()
  .then((data: v2.ListAppsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
