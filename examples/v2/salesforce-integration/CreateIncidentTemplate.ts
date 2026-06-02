/**
 * Create a Salesforce incident template returns "CREATED" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SalesforceIntegrationApi(configuration);

const params: v2.SalesforceIntegrationApiCreateIncidentTemplateRequest = {
  body: {
    data: {
      attributes: {
        description: "An incident was detected by Datadog monitors.",
        name: "production-outage",
        ownerId: "005000000000000",
        priority: "High",
        salesforceOrgId: "596da4af-0563-4097-90ff-07230c3f9db3",
        subject: "Datadog Incident: Production Outage",
      },
      type: "salesforce-incidents-incident-template",
    },
  },
};

apiInstance
  .createIncidentTemplate(params)
  .then((data: v2.SalesforceIncidentsTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
