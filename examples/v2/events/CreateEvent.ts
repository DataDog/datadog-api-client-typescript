/**
 * Post a change event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiCreateEventRequest = {
  body: {
    attributes: {
      attributes: {
        author: {
          name: "",
          type: "user",
        },
        changedResource: {
          name: "feature_flag",
          type: "",
        },
      },
      category: "change",
      message: "payment_processed feature flag has been enabled",
      tags: ["environment:test"],
      timestamp: "2017-01-15T01:30:15.010000Z",
      title: "payment_processed feature flag updated",
    },
    type: "event",
  },
};

apiInstance
  .createEvent(params)
  .then((data: v2.ChangeEventCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
