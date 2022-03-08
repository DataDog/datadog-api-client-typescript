import { v2 } from "@datadog/datadog-api-client";
import * as fs from "fs";

const configuration = v2.createConfiguration();
const apiInstance = new v2.CloudWorkloadSecurityApi(configuration);

let params: v2.CloudWorkloadSecurityApiGetCloudWorkloadSecurityAgentRuleRequest =
  {
    // string | The ID of the Agent rule.
    agentRuleId: "3b5-v82-ns6",
  };

apiInstance
  .getCloudWorkloadSecurityAgentRule(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
