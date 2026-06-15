/**
 * List patterns configurations returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listLLMObsPatternsConfigs"] = true;
const apiInstance = new v2.LLMObservabilityApi(configuration);

apiInstance
  .listLLMObsPatternsConfigs()
  .then((data: v2.LLMObsPatternsConfigsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
