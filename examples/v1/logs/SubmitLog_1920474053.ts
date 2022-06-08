/**
 * Send gzip logs returns "Response from server (always 200 empty JSON)." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

const params: v1.LogsApiSubmitLogRequest = {
  body: [
    {
      message:
        "Example-Send_gzip_logs_returns_Response_from_server_always_200_empty_JSON_response",
      ddtags:
        "host:ExampleSendgziplogsreturnsResponsefromserveralways200emptyJSONresponse",
    },
  ],
  contentEncoding: "gzip",
};

apiInstance
  .submitLog(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
