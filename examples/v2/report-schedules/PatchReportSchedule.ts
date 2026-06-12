/**
 * Update a report schedule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.patchReportSchedule"] = true;
const apiInstance = new v2.ReportSchedulesApi(configuration);

const params: v2.ReportSchedulesApiPatchReportScheduleRequest = {
  body: {
    data: {
      attributes: {
        deliveryFormat: "pdf",
        description: "Updated weekly summary of infrastructure health.",
        recipients: [
          "user@example.com",
          "slack:T01234567.C01234567.alerts",
          "teams:11111111-1111-1111-1111-111111111111|22222222-2222-2222-2222-222222222222|19:exampleChannelId@thread.tacv2",
        ],
        rrule:
          "DTSTART;TZID=America/New_York:20260601T090000\nRRULE:FREQ=WEEKLY;BYDAY=MO;BYHOUR=9;BYMINUTE=0",
        tabId: "66666666-7777-8888-9999-000000000000",
        templateVariables: [
          {
            name: "env",
            values: ["prod"],
          },
        ],
        timeframe: "1w",
        timezone: "America/New_York",
        title: "Weekly Infrastructure Report",
      },
      type: "schedule",
    },
  },
  scheduleUuid: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .patchReportSchedule(params)
  .then((data: v2.ReportScheduleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
