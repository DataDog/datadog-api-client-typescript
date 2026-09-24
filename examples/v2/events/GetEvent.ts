/**
 * Get an event returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiGetEventRequest = {
  eventId: "AZeF-nTCAABzkAgGXzYPtgAA",
};

apiInstance
  .getEvent(params)
  .then((data: v2.V2EventResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
