/**
 * Search RUM operations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listRUMOperations"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

apiInstance
  .listRUMOperations()
  .then((data: v2.RUMOperationsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
