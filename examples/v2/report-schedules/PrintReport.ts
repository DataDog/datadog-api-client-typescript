/**
 * Print a report returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.ReportSchedulesApi(configuration);

const params: v2.ReportSchedulesApiPrintReportRequest = {
  body: {
    data: {
      attributes: {
        fromTs: 1780318800000,
        resourceId: "abc-def-ghi",
        resourceType: "dashboard",
        templateVariables: [
          {
            name: "env",
            values: ["prod"],
          },
        ],
        timeframe: "1w",
        timezone: "America/New_York",
        toTs: 1780923600000,
      },
      type: "report",
    },
  },
};

apiInstance
  .printReport(params)
  .then((data: v2.PrintReportResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
