/**
 * Delete a Salesforce incident template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SalesforceIntegrationApi(configuration);

const params: v2.SalesforceIntegrationApiDeleteIncidentTemplateRequest = {
  incidentTemplateId: "incident_template_id",
};

apiInstance
  .deleteIncidentTemplate(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
