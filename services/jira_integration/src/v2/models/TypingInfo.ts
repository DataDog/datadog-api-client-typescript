import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JiraAccountAttributes } from "./JiraAccountAttributes";
import { JiraAccountData } from "./JiraAccountData";
import { JiraAccountRelationship } from "./JiraAccountRelationship";
import { JiraAccountsMeta } from "./JiraAccountsMeta";
import { JiraAccountsResponse } from "./JiraAccountsResponse";
import { JiraIssueTemplateCreateRequest } from "./JiraIssueTemplateCreateRequest";
import { JiraIssueTemplateCreateRequestAttributes } from "./JiraIssueTemplateCreateRequestAttributes";
import { JiraIssueTemplateCreateRequestAttributesJiraAccount } from "./JiraIssueTemplateCreateRequestAttributesJiraAccount";
import { JiraIssueTemplateCreateRequestData } from "./JiraIssueTemplateCreateRequestData";
import { JiraIssueTemplateData } from "./JiraIssueTemplateData";
import { JiraIssueTemplateDataAttributes } from "./JiraIssueTemplateDataAttributes";
import { JiraIssueTemplateDataRelationships } from "./JiraIssueTemplateDataRelationships";
import { JiraIssueTemplateResponse } from "./JiraIssueTemplateResponse";
import { JiraIssueTemplateUpdateRequest } from "./JiraIssueTemplateUpdateRequest";
import { JiraIssueTemplateUpdateRequestAttributes } from "./JiraIssueTemplateUpdateRequestAttributes";
import { JiraIssueTemplateUpdateRequestData } from "./JiraIssueTemplateUpdateRequestData";
import { JiraIssueTemplatesResponse } from "./JiraIssueTemplatesResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    JiraAccountType: ["jira-account"],
    JiraIssueTemplateType: ["jira-issue-template"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JiraAccountAttributes: JiraAccountAttributes,
    JiraAccountData: JiraAccountData,
    JiraAccountRelationship: JiraAccountRelationship,
    JiraAccountsMeta: JiraAccountsMeta,
    JiraAccountsResponse: JiraAccountsResponse,
    JiraIssueTemplateCreateRequest: JiraIssueTemplateCreateRequest,
    JiraIssueTemplateCreateRequestAttributes:
      JiraIssueTemplateCreateRequestAttributes,
    JiraIssueTemplateCreateRequestAttributesJiraAccount:
      JiraIssueTemplateCreateRequestAttributesJiraAccount,
    JiraIssueTemplateCreateRequestData: JiraIssueTemplateCreateRequestData,
    JiraIssueTemplateData: JiraIssueTemplateData,
    JiraIssueTemplateDataAttributes: JiraIssueTemplateDataAttributes,
    JiraIssueTemplateDataRelationships: JiraIssueTemplateDataRelationships,
    JiraIssueTemplateResponse: JiraIssueTemplateResponse,
    JiraIssueTemplateUpdateRequest: JiraIssueTemplateUpdateRequest,
    JiraIssueTemplateUpdateRequestAttributes:
      JiraIssueTemplateUpdateRequestAttributes,
    JiraIssueTemplateUpdateRequestData: JiraIssueTemplateUpdateRequestData,
    JiraIssueTemplatesResponse: JiraIssueTemplatesResponse,
  },
};
