/**
 * Pause or start a test returns "OK - Returns a boolean indicating if the update was successful." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiUpdateTestPauseStatusRequest = {
  body: {
    newStatus: "live",
  },
  publicId: "public_id",
};

apiInstance
  .updateTestPauseStatus(params)
  .then((data: boolean) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
