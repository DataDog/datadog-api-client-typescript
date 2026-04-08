/**
 * Revoke an on-call event email address returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteOnCallEventEmailAddress"] = true;
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiDeleteOnCallEventEmailAddressRequest = {
  id: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .deleteOnCallEventEmailAddress(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
