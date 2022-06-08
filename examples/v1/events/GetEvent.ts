/**
 * Get an event returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

const params: v1.EventsApiGetEventRequest = {
  eventId: 9223372036854775807,
};

apiInstance
  .getEvent(params)
  .then((data: v1.EventResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
