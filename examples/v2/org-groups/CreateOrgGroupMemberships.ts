/**
 * Create org group memberships returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
configuration.unstableOperations["v2.createOrgGroupMemberships"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiCreateOrgGroupMembershipsRequest = {
  body: {
    data: {
      attributes: {
        orgs: [
          {
            orgSite: "us1",
            orgUuid: "c3d4e5f6-a7b8-9012-cdef-012345678901",
          },
        ],
      },
      relationships: {
        orgGroup: {
          data: {
            id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
            type: "org_groups",
          },
        },
      },
      type: "org_group_memberships",
    },
  },
};

apiInstance
  .createOrgGroupMemberships(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
