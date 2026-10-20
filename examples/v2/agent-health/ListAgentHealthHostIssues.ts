/**
 * List active Agent Health issues returns "OK" response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.AgentHealthApi(configuration);

const params: v2.AgentHealthApiListAgentHealthHostIssuesRequest = {
  resourceId: "123e4567-e89b-12d3-a456-426614174000",
  agentType: "node",
};

apiInstance
  .listAgentHealthHostIssues(params)
  .then((data: v2.AgentHealthHostIssuesResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
