/**
 * Delete a RUM operation returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteRUMOperation"] = true;
const apiInstance = new v2.RUMOperationsApi(configuration);

const params: v2.RUMOperationsApiDeleteRUMOperationRequest = {
  operationId: "operation_id",
};

apiInstance
  .deleteRUMOperation(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
