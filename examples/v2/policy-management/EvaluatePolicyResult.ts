/**
 * Evaluate policy result returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.evaluatePolicyResult"] = true;
const apiInstance = new v2.PolicyManagementApi(configuration);

const params: v2.PolicyManagementApiEvaluatePolicyResultRequest = {
  policyType: "SAML",
};

apiInstance
  .evaluatePolicyResult(params)
  .then((data: v2.PolicyResultResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
