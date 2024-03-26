/**
 * Get SLO report status returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getSLOReportJobStatus"] = true;
const apiInstance = new v2.ServiceLevelObjectivesApi(configuration);

// there is a valid "report" in the system
const REPORT_DATA_ID = process.env.REPORT_DATA_ID as string;

const params: v2.ServiceLevelObjectivesApiGetSLOReportJobStatusRequest = {
  reportId: REPORT_DATA_ID,
};

apiInstance
  .getSLOReportJobStatus(params)
  .then((data: v2.SLOReportStatusGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
