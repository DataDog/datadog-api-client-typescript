/**
 * Create an on-call event email address returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOnCallEventEmailAddress"] = true;
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiCreateOnCallEventEmailAddressRequest = {
  body: {
    data: {
      attributes: {
        alertType: "info",
        description: "On-call email address for my team.",
        format: "json",
        tags: ["env:production", "team:my-team"],
        teamHandle: "my-team",
      },
      type: "event_emails",
    },
  },
};

apiInstance
  .createOnCallEventEmailAddress(params)
  .then((data: v2.EventEmailAddressSingleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
