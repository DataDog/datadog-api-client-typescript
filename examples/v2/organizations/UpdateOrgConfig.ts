/**
 * Update a specific Org Config returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.OrganizationsApi(configuration);

const params: v2.OrganizationsApiUpdateOrgConfigRequest = {
  body: {
    data: {
      attributes: {
        value: "UTC",
      },
      type: "org_configs",
    },
  },
  orgConfigName: "monitor_timezone",
};

apiInstance
  .updateOrgConfig(params)
  .then((data: v2.OrgConfigGetResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
