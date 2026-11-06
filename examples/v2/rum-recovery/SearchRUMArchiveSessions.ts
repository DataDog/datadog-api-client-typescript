/**
 * Search archived sessions returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiSearchRUMArchiveSessionsRequest = {
  body: {
    data: {
      attributes: {
        cursor: "example",
        from: 1789905600000,
        hideRetained: false,
        limit: 0,
        query: "service:web",
        to: 1789992000000,
      },
      id: "11111111-1111-4111-8111-111111111111",
      type: "rum_archive_sessions_request",
    },
  },
};

apiInstance
  .searchRUMArchiveSessions(params)
  .then((data: v2.RumArchiveSessionsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
