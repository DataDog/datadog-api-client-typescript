/**
 * Get a RUM operation returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.RUMOperationsApi(configuration);

// there is a valid "rum_operation" in the system
const RUM_OPERATION_DATA_ID = process.env.RUM_OPERATION_DATA_ID as string;

const params: v2.RUMOperationsApiGetRUMOperationRequest = {
  rumOperationId: RUM_OPERATION_DATA_ID,
};

apiInstance
  .getRUMOperation(params)
  .then((data: v2.RUMOperationResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
