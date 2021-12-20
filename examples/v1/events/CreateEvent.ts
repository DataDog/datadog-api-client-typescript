/**
 * Post an event with a long title returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params: v1.EventsApiCreateEventRequest = {
  body: {
    title:
      "Example-Post_an_event_with_a_long_title_returns_OK_response very very very looooooooong looooooooooooong loooooooooooooooooooooong looooooooooooooooooooooooooong title with 100+ characters",
    text: "A text message.",
    tags: ["test:ExamplePostaneventwithalongtitlereturnsOKresponse"],
  },
};

apiInstance
  .createEvent(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
