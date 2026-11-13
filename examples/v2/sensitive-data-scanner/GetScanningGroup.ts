/**
 * Get Scanning Group returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration({
  authMethods: {
    AuthZ: {
      accessToken: process.env.DD_BEARER_TOKEN as string,
    },
  },
});
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

const params: v2.SensitiveDataScannerApiGetScanningGroupRequest = {
  groupId: "group_id",
};

apiInstance
  .getScanningGroup(params)
  .then((data: v2.SensitiveDataScannerTargetGroupResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
