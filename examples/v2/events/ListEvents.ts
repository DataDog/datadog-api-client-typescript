/**
 * Get a list of events returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listEvents"] = true;
const apiInstance = new v2.EventsApi(configuration);

apiInstance
  .listEvents()
  .then((data: v2.EventsListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
