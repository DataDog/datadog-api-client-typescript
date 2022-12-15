/**
 * Update Scanning Rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// the "scanning_group" has a "scanning_rule"
const RULE_DATA_ID = process.env.RULE_DATA_ID as string;

// there is a valid "scanning_group" in the system
const GROUP_DATA_ID = process.env.GROUP_DATA_ID as string;

const params: v2.SensitiveDataScannerApiUpdateScanningRuleRequest = {
  body: {
    meta: {},
    data: {
      id: RULE_DATA_ID,
      type: "sensitive_data_scanner_rule",
      attributes: {
        name: "Example-Update_Scanning_Rule_returns_OK_response",
        pattern: "pattern",
        textReplacement: {
          type: "none",
        },
        tags: ["sensitive_data:true"],
        isEnabled: true,
      },
      relationships: {
        group: {
          data: {
            type: "sensitive_data_scanner_group",
            id: GROUP_DATA_ID,
          },
        },
      },
    },
  },
  ruleId: RULE_DATA_ID,
};

apiInstance
  .updateScanningRule(params)
  .then((data: v2.SensitiveDataScannerRuleUpdateResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
