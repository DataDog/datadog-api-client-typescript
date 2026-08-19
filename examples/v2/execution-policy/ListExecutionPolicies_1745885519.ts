/**
 * List execution policies with query parameters returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.listExecutionPolicies"] = true;
const apiInstance = new v2.ExecutionPolicyApi(configuration);

// there is a valid "execution_policy" in the system
const EXECUTION_POLICY_DATA_ATTRIBUTES_CREATED_BY = process.env
  .EXECUTION_POLICY_DATA_ATTRIBUTES_CREATED_BY as string;
const EXECUTION_POLICY_DATA_ATTRIBUTES_NAME = process.env
  .EXECUTION_POLICY_DATA_ATTRIBUTES_NAME as string;
const EXECUTION_POLICY_DATA_ID = process.env.EXECUTION_POLICY_DATA_ID as string;

const params: v2.ExecutionPolicyApiListExecutionPoliciesRequest = {
  pageSize: 10,
  pageNumber: 0,
  filterName: EXECUTION_POLICY_DATA_ATTRIBUTES_NAME,
  filterIds: [EXECUTION_POLICY_DATA_ID],
  filterIntegration: ["INTEGRATION_SCRIPT"],
  filterEffects: ["allow"],
  filterCreatorIds: [EXECUTION_POLICY_DATA_ATTRIBUTES_CREATED_BY],
  sort: ["-created_at"],
};

apiInstance
  .listExecutionPolicies(params)
  .then((data: v2.ExecutionPolicyListResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
