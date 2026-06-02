/**
 * Update a Salesforce incident template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SalesforceIntegrationApi(configuration);

const params: v2.SalesforceIntegrationApiUpdateIncidentTemplateRequest = {
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
      id: "596da4af-0563-4097-90ff-07230c3f9db3",
      type: "salesforce-incidents-incident-template",
    },
  },
  incidentTemplateId: "incident_template_id",
};

apiInstance
  .updateIncidentTemplate(params)
  .then((data: v2.SalesforceIncidentsTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
