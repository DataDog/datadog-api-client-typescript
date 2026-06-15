/**
 * Get a patterns configuration returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getLLMObsPatternsConfig"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

apiInstance
  .getLLMObsPatternsConfig()
  .then((data: v2.LLMObsPatternsConfigResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
