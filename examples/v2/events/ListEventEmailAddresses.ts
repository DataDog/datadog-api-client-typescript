/**
 * List event email addresses returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listEventEmailAddresses"] = true;
const apiInstance = new v2.EventsApi(configuration);

apiInstance
  .listEventEmailAddresses()
  .then((data: v2.EventEmailAddressResponseArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
