/**
 * Get all monitor details returns "OK" response
 */

import { v1 } from "@datadog/datadog-api-client";
import { Monitor } from "@datadog/datadog-api-client/models;

const configuration = v1.createConfiguration({debug: true});
const apiInstance = new v1.MonitorsApi(configuration);

apiInstance
  .listMonitors()
  .then((data: Monitor[]) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
