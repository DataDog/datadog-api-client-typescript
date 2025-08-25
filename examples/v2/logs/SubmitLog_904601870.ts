/**
 * Send deflate logs returns "Request accepted for processing (always 202 empty JSON)." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.LogsApi(configuration);

const params: v2.LogsApiSubmitLogRequest = {
  body: [
    {
      ddsource: "nginx",
      ddtags: "env:staging,version:5.1",
      hostname: "i-012345678",
      message: "2019-11-19T14:37:58,995 INFO [process.name][20081] Hello World",
      service: "payment",
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
