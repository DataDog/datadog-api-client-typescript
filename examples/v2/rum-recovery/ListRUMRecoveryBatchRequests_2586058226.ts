/**
 * List batch history filters request creation time independently of session time
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiListRUMRecoveryBatchRequestsRequest = {
  type: "batch",
  from: 1,
  to: 2,
  query: "service:rum18600-fixture AND @usr.id:(123 OR 456)",
};

apiInstance
  .listRUMRecoveryBatchRequests(params)
  .then((data: v2.RumRecoveryBatchListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
