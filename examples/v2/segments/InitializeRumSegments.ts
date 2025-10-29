/**
 * Initialize rum segments returns "Default segments created successfully" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.initializeRumSegments"] = true;
const apiInstance = new v2.SegmentsApi(configuration);

apiInstance
  .initializeRumSegments()
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
