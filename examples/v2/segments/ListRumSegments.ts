/**
 * List rum segments returns "Successful response with list of segments" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listRumSegments"] = true;
const apiInstance = new v2.SegmentsApi(configuration);

apiInstance
  .listRumSegments()
  .then((data: v2.SegmentArray) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
