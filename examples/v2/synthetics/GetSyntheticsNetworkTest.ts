/**
 * Get a Network Path test returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SyntheticsApi(configuration);

const params: v2.SyntheticsApiGetSyntheticsNetworkTestRequest = {
  publicId: "c7a-uwa-wn2",
};

apiInstance
  .getSyntheticsNetworkTest(params)
  .then((data: v2.SyntheticsNetworkTestResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
