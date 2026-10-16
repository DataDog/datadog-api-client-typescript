/**
 * List patterns templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.listLLMObsPatternsTemplates"] = true;
const apiInstance = new v2.AgentObservabilityApi(configuration);

apiInstance
  .listLLMObsPatternsTemplates()
  .then((data: v2.LLMObsPatternsTemplatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
