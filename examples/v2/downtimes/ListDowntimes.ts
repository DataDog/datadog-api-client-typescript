/**
 * Get all downtimes returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DowntimesApi(configuration);

apiInstance
  .listDowntimes()
  .then((data: v2.ListDowntimesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
