/**
 * Get a browser test returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiGetBrowserTestRequest = {
  publicId: "public_id",
};

apiInstance
  .getBrowserTest(params)
  .then((data: v1.SyntheticsBrowserTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
