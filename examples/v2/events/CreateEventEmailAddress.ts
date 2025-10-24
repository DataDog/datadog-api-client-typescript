/**
 * Create event email address returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createEventEmailAddress"] = true;
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiCreateEventEmailAddressRequest = {
  body: {
    data: {
      attributes: {
        format: "",
        notifyHandles: [""],
        tags: [""],
      },
      type: "event_emails",
    },
  },
};

apiInstance
  .createEventEmailAddress(params)
  .then((data: v2.EventEmailAddressResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
