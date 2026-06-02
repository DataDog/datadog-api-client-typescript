/**
 * Get all Salesforce incident templates returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SalesforceIntegrationApi(configuration);

apiInstance
  .getIncidentTemplates()
  .then((data: v2.SalesforceIncidentsTemplatesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
