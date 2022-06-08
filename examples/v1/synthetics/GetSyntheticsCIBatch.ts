/**
 * Get details of batch returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetSyntheticsCIBatchRequest = {
  batchId: "batch_id",
};

apiInstance
  .getSyntheticsCIBatch(params)
  .then((data: v1.SyntheticsBatchDetails) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
