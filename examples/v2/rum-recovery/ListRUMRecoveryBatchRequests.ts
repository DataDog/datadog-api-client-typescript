/**
 * List batch recovery requests returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiListRUMRecoveryBatchRequestsRequest = {
  type: "batch",
};

apiInstance
  .listRUMRecoveryBatchRequests(params)
  .then((data: v2.RumRecoveryBatchListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
