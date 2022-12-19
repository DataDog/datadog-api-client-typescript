/**
 * Reorder Groups returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// there is a valid "scanning_group" in the system
const GROUP_DATA_ID = process.env.GROUP_DATA_ID as string;

// a valid "configuration" in the system
const CONFIGURATION_DATA_ID = process.env.CONFIGURATION_DATA_ID as string;

const params: v2.SensitiveDataScannerApiReorderScanningGroupsRequest = {
  body: {
    data: {
      relationships: {
        groups: {
          data: [
            {
              type: "sensitive_data_scanner_group",
              id: GROUP_DATA_ID,
            },
          ],
        },
      },
      type: "sensitive_data_scanner_configuration",
      id: CONFIGURATION_DATA_ID,
    },
    meta: {},
  },
};

apiInstance
  .reorderScanningGroups(params)
  .then((data: v2.SensitiveDataScannerReorderGroupsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
