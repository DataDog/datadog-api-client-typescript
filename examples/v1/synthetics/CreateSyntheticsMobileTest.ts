/**
 * Create a mobile test returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsMobileTestRequest = {
  body: {
    name: "Example-Synthetic",
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
};

apiInstance
  .createSyntheticsMobileTest(params)
  .then((data: v1.SyntheticsMobileTest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
