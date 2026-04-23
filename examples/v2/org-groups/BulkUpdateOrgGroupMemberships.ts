/**
 * Bulk update org group memberships returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.bulkUpdateOrgGroupMemberships"] = true;
const apiInstance = new v2.OrgGroupsApi(configuration);

const params: v2.OrgGroupsApiBulkUpdateOrgGroupMembershipsRequest = {
  body: {
    data: {
      attributes: {
        orgs: [
          {
            orgSite: "datadoghq.com",
            orgUuid: "c3d4e5f6-a7b8-9012-cdef-012345678901",
          },
        ],
      },
      relationships: {
        sourceOrgGroup: {
          data: {
            id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
            type: "org_groups",
          },
        },
        targetOrgGroup: {
          data: {
            id: "a1b2c3d4-e5f6-7890-abcd-ef0123456789",
            type: "org_groups",
          },
        },
      },
      type: "org_group_membership_bulk_updates",
    },
  },
};

apiInstance
  .bulkUpdateOrgGroupMemberships(params)
  .then((data: v2.OrgGroupMembershipListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
