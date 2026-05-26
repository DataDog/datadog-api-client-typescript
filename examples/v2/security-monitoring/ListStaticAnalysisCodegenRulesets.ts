/**
 * List codegen rulesets returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listStaticAnalysisCodegenRulesets"] = true;
const apiInstance = new v2.SecurityMonitoringApi(configuration);

apiInstance
  .listStaticAnalysisCodegenRulesets()
  .then((data: v2.SastRulesetsResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
