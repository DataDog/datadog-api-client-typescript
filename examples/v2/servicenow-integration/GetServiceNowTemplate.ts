/**
 * Get ServiceNow template returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.getServiceNowTemplate"] = true;
const apiInstance = new v2.ServiceNowIntegrationApi(configuration);

const params: v2.ServiceNowIntegrationApiGetServiceNowTemplateRequest = {
  templateId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
};

apiInstance
  .getServiceNowTemplate(params)
  .then((data: v2.ServiceNowTemplateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
