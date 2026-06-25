/**
 * Get report schedules for a resource returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReportSchedulesApi(configuration);

const params: v2.ReportSchedulesApiGetReportSchedulesForResourceRequest = {
  resourceType: "dashboard",
  resourceId: "resource_id",
};

apiInstance
  .getReportSchedulesForResource(params)
  .then((data: v2.ReportScheduleListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
