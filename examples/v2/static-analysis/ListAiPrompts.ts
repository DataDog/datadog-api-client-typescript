/**
 * List AI prompts returns "Successful response" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listAiPrompts"] = true;
const apiInstance = new v2.StaticAnalysisApi(configuration);

apiInstance
  .listAiPrompts()
  .then((data: v2.AiPromptsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
