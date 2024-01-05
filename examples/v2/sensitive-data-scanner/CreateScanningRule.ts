/**
 * Create Scanning Rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// there is a valid "scanning_group" in the system
const GROUP_DATA_ID = process.env.GROUP_DATA_ID as string;

const params: v2.SensitiveDataScannerApiCreateScanningRuleRequest = {
  body: {
    meta: {},
    data: {
      type: "sensitive_data_scanner_rule",
      attributes: {
        name: "Example-Sensitive-Data-Scanner",
        pattern: "pattern",
        namespaces: ["admin"],
        excludedNamespaces: ["admin.name"],
        textReplacement: {
          type: "none",
        },
        tags: ["sensitive_data:true"],
        isEnabled: true,
        priority: 1,
        includedKeywordConfiguration: {
          keywords: ["credit card"],
          characterCount: 35,
        },
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
};

apiInstance
  .createScanningRule(params)
  .then((data: v2.SensitiveDataScannerCreateRuleResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
