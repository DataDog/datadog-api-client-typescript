import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AgentHealthHostIssue } from "./AgentHealthHostIssue";
import { AgentHealthHostIssuesAttributes } from "./AgentHealthHostIssuesAttributes";
import { AgentHealthHostIssuesData } from "./AgentHealthHostIssuesData";
import { AgentHealthHostIssuesResponse } from "./AgentHealthHostIssuesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AgentHealthAgentType: ["node", "cluster"],
    AgentHealthHostIssuesType: ["agent_health_issues"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AgentHealthHostIssue: AgentHealthHostIssue,
    AgentHealthHostIssuesAttributes: AgentHealthHostIssuesAttributes,
    AgentHealthHostIssuesData: AgentHealthHostIssuesData,
    AgentHealthHostIssuesResponse: AgentHealthHostIssuesResponse,
  },
};
