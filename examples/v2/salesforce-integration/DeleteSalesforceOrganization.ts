/**
 * Delete a connected Salesforce organization returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SalesforceIntegrationApi(configuration);

const params: v2.SalesforceIntegrationApiDeleteSalesforceOrganizationRequest = {
  salesforceOrgId: "salesforce_org_id",
};

apiInstance
  .deleteSalesforceOrganization(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
