/**
 * Get on-call event email address returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOnCallEventEmailAddress"] = true;
const apiInstance = new v2.EventsApi(configuration);

apiInstance
  .getOnCallEventEmailAddress()
  .then((data: v2.EventEmailAddressResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
