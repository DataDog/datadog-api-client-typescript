/**
 * Get the total number of active hosts returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.HostsApi(configuration);

apiInstance
  .getHostTotals()
  .then((data: v1.HostTotals) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
