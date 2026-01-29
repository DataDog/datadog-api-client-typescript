/**
 * Update a notification rule returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiUpdateProjectNotificationRuleRequest = {
  body: {
    data: {
      attributes: {
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
  notificationRuleId: "notification_rule_id",
};

apiInstance
  .updateProjectNotificationRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
