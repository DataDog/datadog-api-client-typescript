/**
 * List pipelines returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ObservabilityPipelinesApi(configuration);

apiInstance
  .listPipelines()
  .then((data: v2.ListPipelinesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
