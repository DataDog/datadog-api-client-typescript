/**
 * Get a list of events returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.EventsApi(configuration);

const params: v1.EventsApiListEventsRequest = {
  start: 9223372036854775807,
  end: 9223372036854775807,
};

apiInstance
  .listEvents(params)
  .then((data: v1.EventListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
