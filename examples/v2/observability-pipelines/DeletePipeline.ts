/**
 * Delete a pipeline returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deletePipeline"] = true;
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

// there is a valid "pipeline" in the system
const PIPELINE_DATA_ID = process.env.PIPELINE_DATA_ID as string;

const params: v2.ObservabilityPipelinesApiDeletePipelineRequest = {
  pipelineId: PIPELINE_DATA_ID,
};

apiInstance
  .deletePipeline(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
