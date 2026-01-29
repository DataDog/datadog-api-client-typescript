/**
 * Create a notification rule returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiCreateProjectNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
        isEnabled: true,
        recipients: [
          {
            data: {},
            type: "EMAIL",
          },
        ],
        triggers: [
          {
            data: {},
            type: "CASE_CREATED",
          },
        ],
      },
      type: "notification_rule",
    },
  },
  projectId: "project_id",
};

apiInstance
  .createProjectNotificationRule(params)
  .then((data: v2.CaseNotificationRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
