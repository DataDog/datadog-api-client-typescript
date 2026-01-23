/**
 * Create ServiceNow template returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createServiceNowTemplate"] = true;
const apiInstance = new v2.ServiceNowIntegrationApi(configuration);

const params: v2.ServiceNowIntegrationApiCreateServiceNowTemplateRequest = {
  body: {
    data: {
      attributes: {
        assignmentGroupId: "65b3341b-0680-47f9-a6d4-134db45c603e",
        businessServiceId: "65b3341b-0680-47f9-a6d4-134db45c603e",
        fieldsMapping: {
          category: "software",
          priority: "1",
        },
        handleName: "incident-template",
        instanceId: "65b3341b-0680-47f9-a6d4-134db45c603e",
        servicenowTablename: "incident",
        userId: "65b3341b-0680-47f9-a6d4-134db45c603e",
      },
      type: "servicenow_templates",
    },
  },
};

apiInstance
  .createServiceNowTemplate(params)
  .then((data: v2.ServiceNowTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
