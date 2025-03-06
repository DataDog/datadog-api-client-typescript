/**
 * Get AWS On Demand task by id returns "OK." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentlessScanningApi(configuration);

const params: v2.AgentlessScanningApiGetAwsOnDemandTaskRequest = {
  taskId: "63d6b4f5-e5d0-4d90-824a-9580f05f026a",
};

apiInstance
  .getAwsOnDemandTask(params)
  .then((data: v2.AwsOnDemandResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
