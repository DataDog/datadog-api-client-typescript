/**
 * List APIs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAPIs"] = true;
const apiInstance = new v2.APIManagementApi(configuration);

apiInstance
  .listAPIs()
  .then((data: v2.ListAPIsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
