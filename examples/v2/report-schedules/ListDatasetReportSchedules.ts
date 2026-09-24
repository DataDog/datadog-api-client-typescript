/**
 * List dataset report schedules returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.ReportSchedulesApi(configuration);

const params: v2.ReportSchedulesApiListDatasetReportSchedulesRequest = {
  datasetId: "dataset_id",
};

apiInstance
  .listDatasetReportSchedules(params)
  .then((data: v2.DatasetReportScheduleListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
