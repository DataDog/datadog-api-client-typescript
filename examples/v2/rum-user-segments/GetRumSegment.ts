/**
 * Get a RUM segment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumSegment"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

const params: v2.RUMUserSegmentsApiGetRumSegmentRequest = {
  segmentId: "a1b2c3d4-1234-5678-9abc-123456789abc",
};

apiInstance
  .getRumSegment(params)
  .then((data: v2.RumSegmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
