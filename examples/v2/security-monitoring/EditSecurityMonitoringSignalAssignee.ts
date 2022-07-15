/**
 * Modify the triage assignee of a security signal returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SecurityMonitoringApi(configuration);

const params: v2.SecurityMonitoringApiEditSecurityMonitoringSignalAssigneeRequest =
  {
    body: {
      data: {
        attributes: {
          assignee: {
            uuid: "",
          },
        },
      },
    },
    signalId: "AQAAAYG1bl5K4HuUewAAAABBWUcxYmw1S0FBQmt2RmhRN0V4ZUVnQUE",
  };

apiInstance
  .editSecurityMonitoringSignalAssignee(params)
  .then((data: v2.SecurityMonitoringSignalTriageUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
