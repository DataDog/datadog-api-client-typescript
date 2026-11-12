import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AgentHealthHostIssue } from "./AgentHealthHostIssue";
import { AgentHealthHostIssuesAttributes } from "./AgentHealthHostIssuesAttributes";
import { AgentHealthHostIssuesData } from "./AgentHealthHostIssuesData";
import { AgentHealthHostIssuesResponse } from "./AgentHealthHostIssuesResponse";
import { AgentHealthIssueAttributes } from "./AgentHealthIssueAttributes";
import { AgentHealthIssueData } from "./AgentHealthIssueData";
import { AgentHealthIssueDetailAttributes } from "./AgentHealthIssueDetailAttributes";
import { AgentHealthIssueDetailData } from "./AgentHealthIssueDetailData";
import { AgentHealthIssueResponse } from "./AgentHealthIssueResponse";
import { AgentHealthIssuesResponse } from "./AgentHealthIssuesResponse";
import { AgentHealthIssuesResponseMeta } from "./AgentHealthIssuesResponseMeta";
import { AgentHealthIssuesResponsePage } from "./AgentHealthIssuesResponsePage";
import { AgentHealthRemediation } from "./AgentHealthRemediation";
import { AgentHealthRemediationScript } from "./AgentHealthRemediationScript";
import { AgentHealthRemediationStep } from "./AgentHealthRemediationStep";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AgentHealthAgentType: ["node", "cluster"],
    AgentHealthHostIssuesType: ["agent_health_issues"],
    AgentHealthIssueResourceType: ["agent_health_issues"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AgentHealthHostIssue: AgentHealthHostIssue,
    AgentHealthHostIssuesAttributes: AgentHealthHostIssuesAttributes,
    AgentHealthHostIssuesData: AgentHealthHostIssuesData,
    AgentHealthHostIssuesResponse: AgentHealthHostIssuesResponse,
    AgentHealthIssueAttributes: AgentHealthIssueAttributes,
    AgentHealthIssueData: AgentHealthIssueData,
    AgentHealthIssueDetailAttributes: AgentHealthIssueDetailAttributes,
    AgentHealthIssueDetailData: AgentHealthIssueDetailData,
    AgentHealthIssueResponse: AgentHealthIssueResponse,
    AgentHealthIssuesResponse: AgentHealthIssuesResponse,
    AgentHealthIssuesResponseMeta: AgentHealthIssuesResponseMeta,
    AgentHealthIssuesResponsePage: AgentHealthIssuesResponsePage,
    AgentHealthRemediation: AgentHealthRemediation,
    AgentHealthRemediationScript: AgentHealthRemediationScript,
    AgentHealthRemediationStep: AgentHealthRemediationStep,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
  },
};
