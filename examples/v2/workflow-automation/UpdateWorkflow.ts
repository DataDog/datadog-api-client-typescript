/**
 * Update an existing Workflow returns "Successfully updated a workflow." response
 */

import { client, v2 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v2.WorkflowAutomationApi(configuration);

// there is a valid "workflow" in the system
const WORKFLOW_DATA_ID = process.env.WORKFLOW_DATA_ID as string;

const params: v2.WorkflowAutomationApiUpdateWorkflowRequest = {
  body: {
    data: {
      attributes: {
        description: "A sample workflow.",
        name: "Example Workflow",
        published: true,
        spec: {
          connectionEnvs: [
            {
              connections: [
                {
                  connectionId: "11111111-1111-1111-1111-111111111111",
                  label: "INTEGRATION_DATADOG",
                },
              ],
              env: "default",
            },
          ],
          inputSchema: {
            parameters: [
              {
                defaultValue: "default",
                name: "input",
                type: "STRING",
              },
            ],
          },
          outputSchema: {
            parameters: [
              {
                name: "output",
                type: "ARRAY_OBJECT",
                value: "outputValue",
              },
            ],
          },
          steps: [
            {
              actionId: "com.datadoghq.dd.monitor.listMonitors",
              connectionLabel: "INTEGRATION_DATADOG",
              name: "Step1",
              outboundEdges: [
                {
                  branchName: "main",
                  nextStepName: "Step2",
                },
              ],
              parameters: [
                {
                  name: "tags",
                  value: "service:monitoring",
                },
              ],
            },
            {
              actionId: "com.datadoghq.core.noop",
              name: "Step2",
            },
          ],
          triggers: [
            {
              monitorTrigger: {
                rateLimit: {
                  count: 1,
                  interval: "3600s",
                },
              },
              startStepNames: ["Step1"],
            },
            {
              startStepNames: ["Step1"],
              githubWebhookTrigger: {},
            },
          ],
        },
        tags: ["team:infra", "service:monitoring", "foo:bar"],
      },
      id: "22222222-2222-2222-2222-222222222222",
      type: "workflows",
    },
  },
  workflowId: WORKFLOW_DATA_ID,
};

apiInstance
  .updateWorkflow(params)
  .then((data: v2.UpdateWorkflowResponse) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
