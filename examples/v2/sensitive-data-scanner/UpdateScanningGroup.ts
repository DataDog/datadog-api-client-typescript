/**
 * Update Scanning Group returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// there is a valid "scanning_group" in the system
const GROUP_DATA_ID = process.env.GROUP_DATA_ID as string;

// a valid "configuration" in the system
const CONFIGURATION_DATA_ID = process.env.CONFIGURATION_DATA_ID as string;

const params: v2.SensitiveDataScannerApiUpdateScanningGroupRequest = {
  body: {
    meta: {},
    data: {
      id: GROUP_DATA_ID,
      type: "sensitive_data_scanner_group",
      attributes: {
        name: "Example-Sensitive-Data-Scanner",
        isEnabled: false,
        productList: ["logs"],
        filter: {
          query: "*",
        },
      },
      relationships: {
        configuration: {
          data: {
            type: "sensitive_data_scanner_configuration",
            id: CONFIGURATION_DATA_ID,
          },
        },
        rules: {
          data: [],
        },
      },
    },
  },
  groupId: GROUP_DATA_ID,
};

apiInstance
  .updateScanningGroup(params)
  .then((data: v2.SensitiveDataScannerGroupUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
