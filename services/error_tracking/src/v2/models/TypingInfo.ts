import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Case } from "./Case";
import { CaseAttributes } from "./CaseAttributes";
import { CaseRelationships } from "./CaseRelationships";
import { CustomAttributeValue } from "./CustomAttributeValue";
import { Issue } from "./Issue";
import { IssueAssigneeRelationship } from "./IssueAssigneeRelationship";
import { IssueAttributes } from "./IssueAttributes";
import { IssueCase } from "./IssueCase";
import { IssueCaseAttributes } from "./IssueCaseAttributes";
import { IssueCaseInsight } from "./IssueCaseInsight";
import { IssueCaseJiraIssue } from "./IssueCaseJiraIssue";
import { IssueCaseJiraIssueResult } from "./IssueCaseJiraIssueResult";
import { IssueCaseReference } from "./IssueCaseReference";
import { IssueCaseRelationship } from "./IssueCaseRelationship";
import { IssueCaseRelationships } from "./IssueCaseRelationships";
import { IssueReference } from "./IssueReference";
import { IssueRelationships } from "./IssueRelationships";
import { IssueResponse } from "./IssueResponse";
import { IssueTeam } from "./IssueTeam";
import { IssueTeamAttributes } from "./IssueTeamAttributes";
import { IssueTeamOwnersRelationship } from "./IssueTeamOwnersRelationship";
import { IssueTeamReference } from "./IssueTeamReference";
import { IssueUpdateAssigneeRequest } from "./IssueUpdateAssigneeRequest";
import { IssueUpdateAssigneeRequestData } from "./IssueUpdateAssigneeRequestData";
import { IssueUpdateStateRequest } from "./IssueUpdateStateRequest";
import { IssueUpdateStateRequestData } from "./IssueUpdateStateRequestData";
import { IssueUpdateStateRequestDataAttributes } from "./IssueUpdateStateRequestDataAttributes";
import { IssueUser } from "./IssueUser";
import { IssueUserAttributes } from "./IssueUserAttributes";
import { IssueUserReference } from "./IssueUserReference";
import { IssuesSearchRequest } from "./IssuesSearchRequest";
import { IssuesSearchRequestData } from "./IssuesSearchRequestData";
import { IssuesSearchRequestDataAttributes } from "./IssuesSearchRequestDataAttributes";
import { IssuesSearchResponse } from "./IssuesSearchResponse";
import { IssuesSearchResult } from "./IssuesSearchResult";
import { IssuesSearchResultAttributes } from "./IssuesSearchResultAttributes";
import { IssuesSearchResultIssueRelationship } from "./IssuesSearchResultIssueRelationship";
import { IssuesSearchResultRelationships } from "./IssuesSearchResultRelationships";
import { JiraIssue } from "./JiraIssue";
import { JiraIssueResult } from "./JiraIssueResult";
import { NullableUserRelationship } from "./NullableUserRelationship";
import { NullableUserRelationshipData } from "./NullableUserRelationshipData";
import { ProjectRelationship } from "./ProjectRelationship";
import { ProjectRelationshipData } from "./ProjectRelationshipData";
import { ServiceNowTicket } from "./ServiceNowTicket";
import { ServiceNowTicketResult } from "./ServiceNowTicketResult";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    Case3rdPartyTicketStatus: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CaseResourceType: ["case"],
    CaseStatus: ["OPEN", "IN_PROGRESS", "CLOSED"],
    CaseStatusGroup: ["SG_OPEN", "SG_IN_PROGRESS", "SG_CLOSED"],
    CaseType: ["STANDARD"],
    CustomAttributeType: ["URL", "TEXT", "NUMBER", "SELECT"],
    GetIssueIncludeQueryParameterItem: ["assignee", "case", "team_owners"],
    IssueCaseResourceType: ["case"],
    IssueLanguage: [
      "BRIGHTSCRIPT",
      "C",
      "C_PLUS_PLUS",
      "C_SHARP",
      "CLOJURE",
      "DOT_NET",
      "ELIXIR",
      "ERLANG",
      "GO",
      "GROOVY",
      "HASKELL",
      "HCL",
      "JAVA",
      "JAVASCRIPT",
      "JVM",
      "KOTLIN",
      "OBJECTIVE_C",
      "PERL",
      "PHP",
      "PYTHON",
      "RUBY",
      "RUST",
      "SCALA",
      "SWIFT",
      "TERRAFORM",
      "TYPESCRIPT",
      "UNKNOWN",
    ],
    IssuePlatform: [
      "ANDROID",
      "BACKEND",
      "BROWSER",
      "FLUTTER",
      "IOS",
      "REACT_NATIVE",
      "ROKU",
      "UNKNOWN",
    ],
    IssueState: ["OPEN", "ACKNOWLEDGED", "RESOLVED", "IGNORED", "EXCLUDED"],
    IssueTeamType: ["team"],
    IssueType: ["issue"],
    IssueUpdateAssigneeRequestDataType: ["assignee"],
    IssueUpdateStateRequestDataType: ["error_tracking_issue"],
    IssueUserType: ["user"],
    IssuesSearchRequestDataAttributesOrderBy: [
      "TOTAL_COUNT",
      "FIRST_SEEN",
      "IMPACTED_SESSIONS",
      "PRIORITY",
    ],
    IssuesSearchRequestDataAttributesPersona: [
      "ALL",
      "BROWSER",
      "MOBILE",
      "BACKEND",
    ],
    IssuesSearchRequestDataAttributesTrack: ["trace", "logs", "rum"],
    IssuesSearchRequestDataType: ["search_request"],
    IssuesSearchResultType: ["error_tracking_search_result"],
    ProjectResourceType: ["project"],
    SearchIssuesIncludeQueryParameterItem: [
      "issue",
      "issue.assignee",
      "issue.case",
      "issue.team_owners",
    ],
    UserResourceType: ["user"],
  },
  oneOfMap: {
    CustomAttributeValuesUnion: [
      "string",
      "Array<string>",
      "number",
      "Array<number>",
    ],
    IssueIncluded: ["IssueCase", "IssueUser", "IssueTeam"],
    IssuesSearchResultIncluded: ["Issue", "Case", "IssueUser", "IssueTeam"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Case: Case,
    CaseAttributes: CaseAttributes,
    CaseRelationships: CaseRelationships,
    CustomAttributeValue: CustomAttributeValue,
    Issue: Issue,
    IssueAssigneeRelationship: IssueAssigneeRelationship,
    IssueAttributes: IssueAttributes,
    IssueCase: IssueCase,
    IssueCaseAttributes: IssueCaseAttributes,
    IssueCaseInsight: IssueCaseInsight,
    IssueCaseJiraIssue: IssueCaseJiraIssue,
    IssueCaseJiraIssueResult: IssueCaseJiraIssueResult,
    IssueCaseReference: IssueCaseReference,
    IssueCaseRelationship: IssueCaseRelationship,
    IssueCaseRelationships: IssueCaseRelationships,
    IssueReference: IssueReference,
    IssueRelationships: IssueRelationships,
    IssueResponse: IssueResponse,
    IssueTeam: IssueTeam,
    IssueTeamAttributes: IssueTeamAttributes,
    IssueTeamOwnersRelationship: IssueTeamOwnersRelationship,
    IssueTeamReference: IssueTeamReference,
    IssueUpdateAssigneeRequest: IssueUpdateAssigneeRequest,
    IssueUpdateAssigneeRequestData: IssueUpdateAssigneeRequestData,
    IssueUpdateStateRequest: IssueUpdateStateRequest,
    IssueUpdateStateRequestData: IssueUpdateStateRequestData,
    IssueUpdateStateRequestDataAttributes:
      IssueUpdateStateRequestDataAttributes,
    IssueUser: IssueUser,
    IssueUserAttributes: IssueUserAttributes,
    IssueUserReference: IssueUserReference,
    IssuesSearchRequest: IssuesSearchRequest,
    IssuesSearchRequestData: IssuesSearchRequestData,
    IssuesSearchRequestDataAttributes: IssuesSearchRequestDataAttributes,
    IssuesSearchResponse: IssuesSearchResponse,
    IssuesSearchResult: IssuesSearchResult,
    IssuesSearchResultAttributes: IssuesSearchResultAttributes,
    IssuesSearchResultIssueRelationship: IssuesSearchResultIssueRelationship,
    IssuesSearchResultRelationships: IssuesSearchResultRelationships,
    JiraIssue: JiraIssue,
    JiraIssueResult: JiraIssueResult,
    NullableUserRelationship: NullableUserRelationship,
    NullableUserRelationshipData: NullableUserRelationshipData,
    ProjectRelationship: ProjectRelationship,
    ProjectRelationshipData: ProjectRelationshipData,
    ServiceNowTicket: ServiceNowTicket,
    ServiceNowTicketResult: ServiceNowTicketResult,
  },
};
