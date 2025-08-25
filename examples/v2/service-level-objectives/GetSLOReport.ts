/**
 * Get SLO report returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSLOReport"] = true;
const apiInstance = new v2.ServiceLevelObjectivesApi(configuration);

const params: v2.ServiceLevelObjectivesApiGetSLOReportRequest = {
  reportId: "9fb2dc2a-ead0-11ee-a174-9fe3a9d7627f",
};

apiInstance
  .getSLOReport(params)
  .then((data: string) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
