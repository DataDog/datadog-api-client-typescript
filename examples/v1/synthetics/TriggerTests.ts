/**
 * Trigger Synthetic tests returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_api_test" in the system
const SYNTHETICS_API_TEST_PUBLIC_ID = process.env
  .SYNTHETICS_API_TEST_PUBLIC_ID as string;

const params: v1.SyntheticsApiTriggerTestsRequest = {
  body: {
    tests: [
      {
        publicId: SYNTHETICS_API_TEST_PUBLIC_ID,
      },
    ],
  },
};

apiInstance
  .triggerTests(params)
  .then((data: v1.SyntheticsTriggerCITestsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
