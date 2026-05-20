/**
 * Create an API test with MCP steps returns "OK - Returns the created test details." response
 */

import { client, v1 } from "@datadog/datadog-api-client";

const configuration = client.createConfiguration();
const apiInstance = new v1.SyntheticsApi(configuration);

const params: v1.SyntheticsApiCreateSyntheticsAPITestRequest = {
  body: {
    config: {
      steps: [
        {
          name: "Initialize MCP session",
          subtype: "mcp",
          allowFailure: false,
          isCritical: true,
          retry: {
            count: 0,
            interval: 300,
          },
          assertions: [
            {
              operator: "is",
              type: "statusCode",
              target: 200,
            },
            {
              type: "mcpRespectsSpecification",
            },
            {
              operator: "contains",
              type: "mcpServerCapabilities",
              target: ["tools"],
            },
          ],
          request: {
            url: "https://example.org/mcp",
            callType: "init",
            mcpProtocolVersion: "2025-06-18",
            headers: {
              "DD-API-KEY": "<YOUR-API-KEY>",
              "DD-APPLICATION-KEY": "<YOUR-APP-KEY>",
            },
          },
        },
        {
          name: "List MCP tools",
          subtype: "mcp",
          allowFailure: false,
          isCritical: true,
          retry: {
            count: 0,
            interval: 300,
          },
          assertions: [
            {
              operator: "is",
              type: "statusCode",
              target: 200,
            },
            {
              operator: "moreThan",
              type: "mcpToolCount",
              target: 0,
            },
            {
              operator: "lessThan",
              type: "mcpToolNameLength",
              target: 64,
            },
            {
              type: "mcpRespectsSpecification",
            },
          ],
          request: {
            url: "https://example.org/mcp",
            callType: "tool_list",
            mcpProtocolVersion: "2025-06-18",
            headers: {
              "DD-API-KEY": "<YOUR-API-KEY>",
              "DD-APPLICATION-KEY": "<YOUR-APP-KEY>",
            },
          },
        },
        {
          name: "Call MCP search tool",
          subtype: "mcp",
          allowFailure: false,
          isCritical: true,
          retry: {
            count: 0,
            interval: 300,
          },
          assertions: [
            {
              operator: "is",
              type: "statusCode",
              target: 200,
            },
            {
              operator: "lessThan",
              type: "responseTime",
              target: 5000,
            },
            {
              type: "mcpRespectsSpecification",
            },
          ],
          request: {
            url: "https://example.org/mcp",
            callType: "tool_call",
            mcpProtocolVersion: "2025-06-18",
            toolName: "search",
            toolArgs: {
              limit: "5",
              query: "datadog synthetics",
            },
            headers: {
              "DD-API-KEY": "<YOUR-API-KEY>",
              "DD-APPLICATION-KEY": "<YOUR-APP-KEY>",
            },
          },
        },
      ],
    },
    locations: ["aws:us-east-2"],
    message: "BDD test payload: synthetics_api_test_mcp_payload.json",
    name: "Example-Synthetic",
    options: {
      minFailureDuration: 10,
      minLocationFailed: 1,
      monitorName: "Example-Synthetic",
      monitorPriority: 5,
      retry: {
        count: 3,
        interval: 1000,
      },
      tickEvery: 900,
    },
    subtype: "multi",
    tags: ["testing:api"],
    type: "api",
  },
};

apiInstance
  .createSyntheticsAPITest(params)
  .then((data: v1.SyntheticsAPITest) => {
    console.log(
      "API called successfully. Returned data: " + JSON.stringify(data)
    );
  })
  .catch((error: any) => console.error(error));
