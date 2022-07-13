/**
 * Modify the triage assignee of a security signal returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SecurityMonitoringApi(configuration);

const params: v1.SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest =
  {
    body: {
      assignee: "773b045d-ccf8-4808-bd3b-955ef6a8c940",
    },
    signalId: "AQAAAYDiB_Ol8PbzFAAAAABBWURpQl9PbEFBQU0yeXhGTG9ZV2JnQUE",
  };

apiInstance
  .editSecurityMonitoringSignalAssignee(params)
  .then((data: v1.SuccessfulSignalUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
