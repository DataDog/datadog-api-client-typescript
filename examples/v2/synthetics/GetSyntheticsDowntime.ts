/**
 * Get a Synthetics downtime returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetSyntheticsDowntimeRequest = {
  downtimeId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .getSyntheticsDowntime(params)
  .then((data: v2.SyntheticsDowntimeResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
