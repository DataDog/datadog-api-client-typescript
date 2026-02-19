/**
 * Initialize RUM segments returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.initializeRumSegments"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

apiInstance
  .initializeRumSegments()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
