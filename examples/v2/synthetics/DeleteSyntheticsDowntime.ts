/**
 * Delete a Synthetics downtime returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiDeleteSyntheticsDowntimeRequest = {
  downtimeId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .deleteSyntheticsDowntime(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
