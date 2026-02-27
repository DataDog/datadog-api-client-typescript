/**
 * Get on-call event email addresses returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getOnCallEventEmailAddresses"] = true;
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiGetOnCallEventEmailAddressesRequest = {
  filterTeamHandle: "my-team",
};

apiInstance
  .getOnCallEventEmailAddresses(params)
  .then((data: v2.EventEmailAddressesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
