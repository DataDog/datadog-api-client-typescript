/**
 * Delete a RUM segment returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteRumSegment"] = true;
const apiInstance = new v2.RUMUserSegmentsApi(configuration);

const params: v2.RUMUserSegmentsApiDeleteRumSegmentRequest = {
  segmentId: "a1b2c3d4-1234-5678-9abc-123456789abc",
};

apiInstance
  .deleteRumSegment(params)
  .then((data: v2.RumSegmentDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
