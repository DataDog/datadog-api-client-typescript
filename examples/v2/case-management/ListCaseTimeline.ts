/**
 * Get case timeline returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCaseTimeline"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiListCaseTimelineRequest = {
  caseId: "case_id",
};

apiInstance
  .listCaseTimeline(params)
  .then((data: v2.TimelineResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
