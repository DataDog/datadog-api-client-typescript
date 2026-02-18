/**
 * Create an enrollment returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createOnPremManagementServiceEnrollment"] =
  true;
const apiInstance = new v2.OnPremManagementServiceApi(configuration);

const params: v2.OnPremManagementServiceApiCreateOnPremManagementServiceEnrollmentRequest =
  {
    body: {
      data: {
        attributes: {
          actionsAllowlist: ["com.datadoghq.jenkins.*"],
          runnerHost: "runner.example.com",
          runnerModes: ["workflow_automation"],
          runnerName: "my-runner",
        },
        type: "enrollment",
      },
    },
  };

apiInstance
  .createOnPremManagementServiceEnrollment(params)
  .then((data: v2.OnPremManagementServiceCreateEnrollmentResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
