/**
 * Revoke an event email address returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteEventEmailAddress"] = true;
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiDeleteEventEmailAddressRequest = {
  emailUuid: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .deleteEventEmailAddress(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
