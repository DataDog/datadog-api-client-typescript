/**
 * Post an event returns "OK" response with an int64 ID above 2^53
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

const params: v1.EventsApiCreateEventRequest = {
  body: {
    title: "Example-Event",
    text: "An event whose ID exceeds Number.MAX_SAFE_INTEGER.",
    tags: ["test:ExampleEvent"],
  },
};

apiInstance
  .createEvent(params)
  .then((data: v1.EventCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
