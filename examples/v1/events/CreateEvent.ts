/**
 * Post an event returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";

const configuration = v1.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

let params: v1.EventsApiCreateEventRequest = {
  body: {
title: "Example-Post_an_event_returns_OK_response",
text: "A text message.",
tags: [
"test:ExamplePostaneventreturnsOKresponse",
],
},
  
};

apiInstance
  .createEvent(params)
  .then((data: any) => {
    console.log("API called successfully. Returned data: " + JSON.stringify(data));
  })
  .catch((error: any) => console.error(error));