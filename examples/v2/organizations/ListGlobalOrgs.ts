/**
 * List global orgs returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiListGlobalOrgsRequest = {
  userHandle: "user@example.com",
};

apiInstance
  .listGlobalOrgs(params)
  .then((data: v2.GlobalOrgsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
