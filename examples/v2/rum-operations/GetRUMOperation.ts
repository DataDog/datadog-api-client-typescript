/**
 * Get a RUM operation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRUMOperation"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiGetRUMOperationRequest = {
  operationId: "operation_id",
};

apiInstance
  .getRUMOperation(params)
  .then((data: v2.RUMOperationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
