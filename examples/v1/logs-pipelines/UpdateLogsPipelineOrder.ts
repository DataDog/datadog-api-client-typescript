/**
 * Update pipeline order returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsPipelinesApi(configuration);

const params: v1.LogsPipelinesApiUpdateLogsPipelineOrderRequest = {
  body: {
    pipelineIds: ["tags", "org_ids", "products"],
  },
};

apiInstance
  .updateLogsPipelineOrder(params)
  .then((data: v1.LogsPipelinesOrder) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
