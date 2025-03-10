/**
 * Get a specific pipeline returns "Details of a pipeline" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

const params: v2.ObservabilityPipelinesApiGetPipelineRequest = {
  pipelineId: "pipeline_id",
};

apiInstance
  .getPipeline(params)
  .then((data: v2.Pipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
