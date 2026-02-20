/**
 * Edit a Mobile test returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

// there is a valid "synthetics_mobile_test" in the system
const SYNTHETICS_MOBILE_TEST_PUBLIC_ID = process.env
  .SYNTHETICS_MOBILE_TEST_PUBLIC_ID as string;

const params: v1.SyntheticsApiUpdateMobileTestRequest = {
  body: {
    name: "Example-Synthetic-updated",
    status: "paused",
    type: "mobile",
    config: {
      variables: [],
    },
    message: "",
    options: {
      deviceIds: ["synthetics:mobile:device:iphone_15_ios_17"],
      mobileApplication: {
        applicationId: "ab0e0aed-536d-411a-9a99-5428c27d8f8e",
        referenceId: "6115922a-5f5d-455e-bc7e-7955a57f3815",
        referenceType: "version",
      },
      tickEvery: 3600,
    },
    steps: [],
  },
  publicId: SYNTHETICS_MOBILE_TEST_PUBLIC_ID,
};

apiInstance
  .updateMobileTest(params)
  .then((data: v1.SyntheticsMobileTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
