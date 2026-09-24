/**
 * Create a test suite for a DEM journey returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiCreateTestSuiteForJourneyRequest = {
  body: {
    data: {
      attributes: {
        includeTestsFromJourneyCoverage: true,
        testSuiteName: "My Custom Suite",
      },
      type: "create_test_suite_for_journey_request",
    },
  },
  publicJourneyId: "public_journey_id",
};

apiInstance
  .createTestSuiteForJourney(params)
  .then((data: v2.DemJourneyTestSuiteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
