/**
 * Update an org authorized client returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrgAuthorizedClientsApi(configuration);

const params: v2.OrgAuthorizedClientsApiUpdateOrgAuthorizedClientRequest = {
  body: {
    data: {
      attributes: {
        disabled: true,
      },
      id: "00000000-0000-0000-0000-000000000001",
      type: "org_authorized_clients",
    },
  },
  orgAuthorizedClientId: "00000000-0000-0000-0000-000000000001",
};

apiInstance
  .updateOrgAuthorizedClient(params)
  .then((data: v2.OrgAuthorizedClientResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
