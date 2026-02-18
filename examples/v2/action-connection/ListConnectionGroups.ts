/**
 * List connection groups returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listConnectionGroups"] = true;
const apiInstance = new v2.ActionConnectionApi(configuration);

apiInstance
  .listConnectionGroups()
  .then((data: v2.ListConnectionGroupsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
