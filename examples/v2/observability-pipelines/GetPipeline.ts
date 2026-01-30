/**
 * Get a specific pipeline returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

// there is a valid "pipeline" in the system
const PIPELINE_DATA_ID = process.env.PIPELINE_DATA_ID as string;

const params: v2.ObservabilityPipelinesApiGetPipelineRequest = {
  pipelineId: PIPELINE_DATA_ID,
};

apiInstance
  .getPipeline(params)
  .then((data: v2.ObservabilityPipeline) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
