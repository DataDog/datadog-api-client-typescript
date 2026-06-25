/**
 * Toggle a report schedule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReportSchedulesApi(configuration);

const params: v2.ReportSchedulesApiToggleReportScheduleRequest = {
  body: {
    data: {
      attributes: {
        status: "active",
      },
      type: "schedule",
    },
  },
  scheduleUuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .toggleReportSchedule(params)
  .then((data: v2.ReportScheduleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
