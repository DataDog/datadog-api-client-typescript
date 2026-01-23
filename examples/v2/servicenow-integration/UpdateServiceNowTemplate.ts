/**
 * Update ServiceNow template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateServiceNowTemplate"] = true;
const apiInstance = new v2.ServiceNowIntegrationApi(configuration);

const params: v2.ServiceNowIntegrationApiUpdateServiceNowTemplateRequest = {
  body: {
    data: {
      attributes: {
        assignmentGroupId: "65b3341b-0680-47f9-a6d4-134db45c603e",
        businessServiceId: "65b3341b-0680-47f9-a6d4-134db45c603e",
        fieldsMapping: {
          category: "hardware",
          priority: "2",
        },
        handleName: "incident-template-updated",
        instanceId: "65b3341b-0680-47f9-a6d4-134db45c603e",
        servicenowTablename: "incident",
        userId: "65b3341b-0680-47f9-a6d4-134db45c603e",
      },
      type: "servicenow_templates",
    },
  },
  templateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .updateServiceNowTemplate(params)
  .then((data: v2.ServiceNowTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
