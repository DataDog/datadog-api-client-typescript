/**
 * Get all organization handles returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.GoogleChatIntegrationApi(configuration);

const params: v2.GoogleChatIntegrationApiListOrganizationHandlesRequest = {
  organizationBindingId: "e54cb570-c674-529c-769d-84b312288ed7",
};

apiInstance
  .listOrganizationHandles(params)
  .then((data: v2.GoogleChatOrganizationHandlesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
