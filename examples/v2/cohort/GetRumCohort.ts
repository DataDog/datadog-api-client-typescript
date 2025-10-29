/**
 * Get rum cohort returns "Successful response with cohort analysis data" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumCohort"] = true;
const apiInstance = new v2.CohortApi(configuration);

const params: v2.CohortApiGetRumCohortRequest = {
  body: {
    data: {
      attributes: {
        definition: {
          audienceFilters: {
            accounts: [
              {
                name: "",
              },
            ],
            segments: [
              {
                name: "",
                segmentId: "",
              },
            ],
            users: [
              {
                name: "",
              },
            ],
          },
        },
        time: {},
      },
      type: "cohort_request",
    },
  },
};

apiInstance
  .getRumCohort(params)
  .then((data: v2.GetCohortResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
