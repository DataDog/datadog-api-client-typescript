/**
 * Get a RUM operation by name returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRUMOperationByName"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiGetRUMOperationByNameRequest = {
  name: "name",
};

apiInstance
  .getRUMOperationByName(params)
  .then((data: v2.RUMOperationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
