/**
 * Get a Mobile test returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_mobile_test" in the system
const SYNTHETICS_MOBILE_TEST_PUBLIC_ID = process.env
  .SYNTHETICS_MOBILE_TEST_PUBLIC_ID as string;

const params: v1.SyntheticsApiGetMobileTestRequest = {
  publicId: SYNTHETICS_MOBILE_TEST_PUBLIC_ID,
};

apiInstance
  .getMobileTest(params)
  .then((data: v1.SyntheticsMobileTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
