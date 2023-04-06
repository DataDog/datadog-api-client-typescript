/**
 * Send logs returns "Response from server (always 200 empty JSON)." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

const params: v1.LogsApiSubmitLogRequest = {
  body: [
    {
      message: "Example-Log",
      ddtags: "host:ExampleLog",
    },
  ],
};

apiInstance
  .submitLog(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
