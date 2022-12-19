/**
 * Delete Scanning Rule returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.SensitiveDataScannerApi(configuration);

// the "scanning_group" has a "scanning_rule"
const RULE_DATA_ID = process.env.RULE_DATA_ID as string;

const params: v2.SensitiveDataScannerApiDeleteScanningRuleRequest = {
  body: {
    meta: {},
  },
  ruleId: RULE_DATA_ID,
};

apiInstance
  .deleteScanningRule(params)
  .then((data: v2.SensitiveDataScannerRuleDeleteResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
