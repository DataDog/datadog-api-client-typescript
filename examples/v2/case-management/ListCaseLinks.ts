/**
 * List case links returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listCaseLinks"] = true;
const apiInstance = new v2.CaseManagementApi(configuration);

const params: v2.CaseManagementApiListCaseLinksRequest = {
  entityType: "CASE",
  entityId: "bf0cbac6-4c16-4cfb-b6bf-ca5e0ec37a4f",
};

apiInstance
  .listCaseLinks(params)
  .then((data: v2.CaseLinksResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
