/**
 * List RUM operation strong links returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listRUMOperationStrongLinks"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

apiInstance
  .listRUMOperationStrongLinks()
  .then((data: v2.RUMOperationStrongLinksListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
