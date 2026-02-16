/**
 * Update a connection group returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.updateConnectionGroup"] = true;
const apiInstance = new v2.ActionConnectionApi(configuration);

const params: v2.ActionConnectionApiUpdateConnectionGroupRequest = {
  body: {
    data: {
      attributes: {
        connections: [],
        description: "An updated test connection group for AWS integrations",
        name: "My Connection Group Updated",
        tagKeys: [],
      },
      type: "connection_group",
    },
  },
  connectionGroupId: "connection_group_id",
};

apiInstance
  .updateConnectionGroup(params)
  .then((data: v2.UpdateConnectionGroupResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
