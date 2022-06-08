/**
 * Bulk Delete SLO Timeframes returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.ServiceLevelObjectivesApi(configuration);

const params: v1.ServiceLevelObjectivesApiDeleteSLOTimeframeInBulkRequest = {
  body: {
    id1: ["7d", "30d"],
    id2: ["7d", "30d"],
  },
};

apiInstance
  .deleteSLOTimeframeInBulk(params)
  .then((data: v1.SLOBulkDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
