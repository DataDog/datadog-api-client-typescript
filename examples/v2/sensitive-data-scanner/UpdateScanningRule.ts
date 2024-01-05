/**
 * Update Scanning Rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// the "scanning_group" has a "scanning_rule"
const RULE_DATA_ID = process.env.RULE_DATA_ID as string;

const params: v2.SensitiveDataScannerApiUpdateScanningRuleRequest = {
  body: {
    meta: {},
    data: {
      id: RULE_DATA_ID,
      type: "sensitive_data_scanner_rule",
      attributes: {
        name: "Example-Sensitive-Data-Scanner",
        pattern: "pattern",
        textReplacement: {
          type: "none",
        },
        tags: ["sensitive_data:true"],
        isEnabled: true,
        priority: 5,
        includedKeywordConfiguration: {
          keywords: ["credit card", "cc"],
          characterCount: 35,
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
