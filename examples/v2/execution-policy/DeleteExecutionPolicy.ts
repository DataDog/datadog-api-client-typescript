/**
 * Delete an execution policy returns "No Content" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.deleteExecutionPolicy"] = true;
const apiInstance = new v2.ExecutionPolicyApi(configuration);

// there is a valid "execution_policy" in the system
const EXECUTION_POLICY_DATA_ID = process.env.EXECUTION_POLICY_DATA_ID as string;

const params: v2.ExecutionPolicyApiDeleteExecutionPolicyRequest = {
  policyId: EXECUTION_POLICY_DATA_ID,
};

apiInstance
  .deleteExecutionPolicy(params)
  .then((data: any) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
