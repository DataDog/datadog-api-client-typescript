/**
 * Batch get DEM journeys by test suite IDs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.DEMApi(configuration);

const params: v2.DEMApiBatchGetJourneysByTestSuiteIDsRequest = {
  body: {
    data: {
      attributes: {
        testSuiteIds: ["suite-abc123", "suite-def456"],
      },
      type: "batch_get_journeys_by_test_suite_ids_request",
    },
  },
};

apiInstance
  .batchGetJourneysByTestSuiteIDs(params)
  .then((data: v2.DemJourneysListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
