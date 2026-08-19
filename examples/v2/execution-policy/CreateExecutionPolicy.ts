/**
 * Create an execution policy returns "Created" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
configuration.unstableOperations["v2.createExecutionPolicy"] = true;
const apiInstance = new v2.ExecutionPolicyApi(configuration);

const params: v2.ExecutionPolicyApiCreateExecutionPolicyRequest = {
  body: {
    data: {
      type: "execution_policy",
      attributes: {
        name: "Cassette Execution Policy exampleexecutionpolicy",
        effect: "allow",
        actionPattern: {
          integration: "INTEGRATION_SCRIPT",
          actionFqns: ["com.datadoghq.script.*"],
        },
      },
    },
  },
};

apiInstance
  .createExecutionPolicy(params)
  .then((data: v2.ExecutionPolicyResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
