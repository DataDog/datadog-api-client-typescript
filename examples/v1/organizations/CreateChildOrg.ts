/**
 * Create a child organization returns "OK" response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.OrganizationsApi(configuration);

const params: v1.OrganizationsApiCreateChildOrgRequest = {
  body: {
    billing: {
      type: "parent_billing",
    },
    name: "New child org",
    subscription: {
      type: "pro",
    },
  },
};

apiInstance
  .createChildOrg(params)
  .then((data: v1.OrganizationCreateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
