/**
 * Delete Scanning Group returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// there is a valid "scanning_group" in the system
const GROUP_DATA_ID = process.env.GROUP_DATA_ID as string;

const params: v2.SensitiveDataScannerApiDeleteScanningGroupRequest = {
  body: {
    meta: {},
  },
  groupId: GROUP_DATA_ID,
};

apiInstance
  .deleteScanningGroup(params)
  .then((data: v2.SensitiveDataScannerGroupDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
