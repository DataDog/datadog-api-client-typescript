/**
 * Escalate On-Call Page returns "Accepted." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OnCallPagingApi(configuration);

const params: v2.OnCallPagingApiEscalateOnCallPageRequest = {
  pageId: "15e74b8b-f865-48d0-bcc5-453323ed2c8f",
};

apiInstance
  .escalateOnCallPage(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
