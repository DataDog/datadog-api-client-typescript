/**
 * Send deflate logs returns "Response from server (always 200 empty JSON)." response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.LogsApi(configuration);

let params: v1.LogsApiSubmitLogRequest = {
  body: [
    {
      message:
        "Test-Example-Send_deflate_logs_returns_Response_from_server_always_200_empty_JSON_response",
      ddtags:
        "host:TestExampleSenddeflatelogsreturnsResponsefromserveralways200emptyJSONresponse",
    },
  ],
  contentEncoding: "deflate",
};

apiInstance
  .submitLog(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
