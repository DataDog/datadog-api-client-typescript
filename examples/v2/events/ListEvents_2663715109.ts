/**
 * Get a quick list of events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.EventsApi(configuration);

const params: v2.EventsApiListEventsRequest = {
  filterQuery: "datadog-agent",
  filterFrom: "2020-09-17T11:48:36+01:00",
  filterTo: "2020-09-17T12:48:36+01:00",
  pageLimit: 5,
};

apiInstance
  .listEvents(params)
  .then((data: v2.EventsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
