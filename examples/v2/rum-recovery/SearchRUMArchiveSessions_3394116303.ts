/**
 * Search archived sessions returns canonical data and first-page metadata
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.RUMRecoveryApi(configuration);

const params: v2.RUMRecoveryApiSearchRUMArchiveSessionsRequest = {
  body: {
    data: {
      type: "rum_archive_sessions_request",
      attributes: {
        query: "service:rum18600-fixture",
        from: 1636024271000,
        to: 1636629071000,
        limit: 1,
      },
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
