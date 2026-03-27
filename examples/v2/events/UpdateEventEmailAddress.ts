/**
 * Update an event email address returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateEventEmailAddress"] = true;
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiUpdateEventEmailAddressRequest = {
  body: {
    data: {
      attributes: {
        alertType: "info",
        description: "Updated description for the email address.",
        notifyHandles: ["@slack-my-channel"],
        tags: ["env:production", "team:my-team"],
      },
      type: "event_emails",
    },
  },
  emailUuid: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .updateEventEmailAddress(params)
  .then((data: v2.EventEmailAddressSingleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
