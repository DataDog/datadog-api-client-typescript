/**
 * Get rum cohort users returns "Successful response with cohort users" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getRumCohortUsers"] = true;
const apiInstance = new v2.CohortApi(configuration);

const params: v2.CohortApiGetRumCohortUsersRequest = {
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
      type: "cohort_users_request",
    },
  },
};

apiInstance
  .getRumCohortUsers(params)
  .then((data: v2.GetCohortUsersResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
