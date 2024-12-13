/**
 * Gets a list of data deletion requests returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getDataDeletionRequests"] = true;
const apiInstance = new v2.DataDeletionApi(configuration);

apiInstance
  .getDataDeletionRequests()
  .then((data: v2.GetDataDeletionsResponseBody) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
