import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Issue } from "./Issue";
import { IssueAssigneeRelationship } from "./IssueAssigneeRelationship";
import { IssueAttributes } from "./IssueAttributes";
import { IssueBitsInvestigationReference } from "./IssueBitsInvestigationReference";
import { IssueBitsInvestigationRelationship } from "./IssueBitsInvestigationRelationship";
import { IssueCase } from "./IssueCase";
import { IssueCaseAttributes } from "./IssueCaseAttributes";
import { IssueCaseInsight } from "./IssueCaseInsight";
import { IssueCaseJiraIssue } from "./IssueCaseJiraIssue";
import { IssueCaseJiraIssueResult } from "./IssueCaseJiraIssueResult";
import { IssueCaseLinearIssue } from "./IssueCaseLinearIssue";
import { IssueCaseLinearIssueResult } from "./IssueCaseLinearIssueResult";
import { IssueCaseReference } from "./IssueCaseReference";
import { IssueCaseRelationship } from "./IssueCaseRelationship";
import { IssueCaseRelationships } from "./IssueCaseRelationships";
import { IssuePullRequest } from "./IssuePullRequest";
import { IssuePullRequestAttributes } from "./IssuePullRequestAttributes";
import { IssuePullRequestReference } from "./IssuePullRequestReference";
import { IssuePullRequestsRelationship } from "./IssuePullRequestsRelationship";
import { IssueReference } from "./IssueReference";
import { IssueRegression } from "./IssueRegression";
import { IssueRelationships } from "./IssueRelationships";
import { IssueResponse } from "./IssueResponse";
import { IssueSample } from "./IssueSample";
import { IssueSampleAttributes } from "./IssueSampleAttributes";
import { IssueSampleCodeSnippet } from "./IssueSampleCodeSnippet";
import { IssueSampleErrorStack } from "./IssueSampleErrorStack";
import { IssueSampleFrameLink } from "./IssueSampleFrameLink";
import { IssueSampleGitFileLocation } from "./IssueSampleGitFileLocation";
import { IssueSampleReference } from "./IssueSampleReference";
import { IssueSampleStackFrame } from "./IssueSampleStackFrame";
import { IssueSamplesRelationship } from "./IssueSamplesRelationship";
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
import { IssueWatch } from "./IssueWatch";
import { IssueWatchAction } from "./IssueWatchAction";
import { IssueWatchAttributes } from "./IssueWatchAttributes";
import { IssueWatchCondition } from "./IssueWatchCondition";
import { IssueWatchReference } from "./IssueWatchReference";
import { IssueWatchesRelationship } from "./IssueWatchesRelationship";
import { IssuesSearchRequest } from "./IssuesSearchRequest";
import { IssuesSearchRequestData } from "./IssuesSearchRequestData";
import { IssuesSearchRequestDataAttributes } from "./IssuesSearchRequestDataAttributes";
import { IssuesSearchResponse } from "./IssuesSearchResponse";
import { IssuesSearchResult } from "./IssuesSearchResult";
import { IssuesSearchResultAttributes } from "./IssuesSearchResultAttributes";
import { IssuesSearchResultIssueRelationship } from "./IssuesSearchResultIssueRelationship";
import { IssuesSearchResultRelationships } from "./IssuesSearchResultRelationships";
import { NullableUserRelationship } from "./NullableUserRelationship";
import { NullableUserRelationshipData } from "./NullableUserRelationshipData";
import { ProjectRelationship } from "./ProjectRelationship";
import { ProjectRelationshipData } from "./ProjectRelationshipData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CaseStatus: ["OPEN", "IN_PROGRESS", "CLOSED"],
    CaseStatusGroup: ["SG_OPEN", "SG_IN_PROGRESS", "SG_CLOSED"],
    GetIssueIncludeQueryParameterItem: [
      "assignee",
      "bits_investigation",
      "case",
      "pull_requests",
      "samples",
      "team_owners",
      "watches",
    ],
    IssueBitsInvestigationType: ["bits_investigation"],
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
      "TF",
      "TYPESCRIPT",
      "UNKNOWN",
    ],
    IssuePlatform: [
      "ANDROID",
      "BACKEND",
      "BROWSER",
      "ELECTRON",
      "FLUTTER",
      "IOS",
      "REACT_NATIVE",
      "ROKU",
      "UNKNOWN",
    ],
    IssuePullRequestReason: ["unknown", "fix", "trigger"],
    IssuePullRequestType: ["error_tracking_pull_request"],
    IssueSampleBias: [
      "latest",
      "git_metadata",
      "trace",
      "session_replay",
      "exception_replay",
    ],
    IssueSampleDataSource: [
      "APM",
      "LOGS",
      "RUM",
      "LLMOBS",
      "SYNTHETICS",
      "NONE",
    ],
    IssueSampleType: ["error_tracking_issue_sample"],
    IssueState: ["OPEN", "ACKNOWLEDGED", "RESOLVED", "IGNORED", "EXCLUDED"],
    IssueTeamType: ["team"],
    IssueType: ["issue"],
    IssueUpdateAssigneeRequestDataType: ["assignee"],
    IssueUpdateStateRequestDataType: ["error_tracking_issue"],
    IssueUserType: ["user"],
    IssueWatchActionKind: ["CHANGE_ISSUE_STATE"],
    IssueWatchConditionKind: [
      "OCCURRENCES",
      "CARDINALITY",
      "ELAPSED_TIME",
      "ANY",
      "ALL",
    ],
    IssueWatchStatus: ["ACTIVE"],
    IssueWatchType: ["error_tracking_issue_watch"],
    IssuesSearchRequestDataAttributesOrderBy: [
      "TOTAL_COUNT",
      "FIRST_SEEN",
      "IMPACTED_SESSIONS",
      "PRIORITY",
      "IMPACTED_ACCOUNTS",
    ],
    IssuesSearchRequestDataAttributesPersona: [
      "ALL",
      "BROWSER",
      "MOBILE",
      "BACKEND",
      "AGENT",
    ],
    IssuesSearchRequestDataAttributesTrack: ["trace", "logs", "rum", "llmobs"],
    IssuesSearchRequestDataType: ["search_request"],
    IssuesSearchResultType: ["error_tracking_search_result"],
    ProjectResourceType: ["project"],
    SearchIssuesIncludeQueryParameterItem: [
      "issue",
      "issue.assignee",
      "issue.bits_investigation",
      "issue.case",
      "issue.impacted_sessions",
      "issue.impacted_users",
      "issue.pull_requests",
      "issue.team_owners",
      "issue.watches",
    ],
    UserResourceType: ["user"],
  },
  oneOfMap: {
    IssueIncluded: [
      "IssueCase",
      "IssueUser",
      "IssueTeam",
      "IssuePullRequest",
      "IssueWatch",
      "IssueSample",
    ],
    IssuesSearchResultIncluded: [
      "Issue",
      "IssueCase",
      "IssueUser",
      "IssueTeam",
      "IssuePullRequest",
      "IssueWatch",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Issue: Issue,
    IssueAssigneeRelationship: IssueAssigneeRelationship,
    IssueAttributes: IssueAttributes,
    IssueBitsInvestigationReference: IssueBitsInvestigationReference,
    IssueBitsInvestigationRelationship: IssueBitsInvestigationRelationship,
    IssueCase: IssueCase,
    IssueCaseAttributes: IssueCaseAttributes,
    IssueCaseInsight: IssueCaseInsight,
    IssueCaseJiraIssue: IssueCaseJiraIssue,
    IssueCaseJiraIssueResult: IssueCaseJiraIssueResult,
    IssueCaseLinearIssue: IssueCaseLinearIssue,
    IssueCaseLinearIssueResult: IssueCaseLinearIssueResult,
    IssueCaseReference: IssueCaseReference,
    IssueCaseRelationship: IssueCaseRelationship,
    IssueCaseRelationships: IssueCaseRelationships,
    IssuePullRequest: IssuePullRequest,
    IssuePullRequestAttributes: IssuePullRequestAttributes,
    IssuePullRequestReference: IssuePullRequestReference,
    IssuePullRequestsRelationship: IssuePullRequestsRelationship,
    IssueReference: IssueReference,
    IssueRegression: IssueRegression,
    IssueRelationships: IssueRelationships,
    IssueResponse: IssueResponse,
    IssueSample: IssueSample,
    IssueSampleAttributes: IssueSampleAttributes,
    IssueSampleCodeSnippet: IssueSampleCodeSnippet,
    IssueSampleErrorStack: IssueSampleErrorStack,
    IssueSampleFrameLink: IssueSampleFrameLink,
    IssueSampleGitFileLocation: IssueSampleGitFileLocation,
    IssueSampleReference: IssueSampleReference,
    IssueSampleStackFrame: IssueSampleStackFrame,
    IssueSamplesRelationship: IssueSamplesRelationship,
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
    IssueWatch: IssueWatch,
    IssueWatchAction: IssueWatchAction,
    IssueWatchAttributes: IssueWatchAttributes,
    IssueWatchCondition: IssueWatchCondition,
    IssueWatchReference: IssueWatchReference,
    IssueWatchesRelationship: IssueWatchesRelationship,
    IssuesSearchRequest: IssuesSearchRequest,
    IssuesSearchRequestData: IssuesSearchRequestData,
    IssuesSearchRequestDataAttributes: IssuesSearchRequestDataAttributes,
    IssuesSearchResponse: IssuesSearchResponse,
    IssuesSearchResult: IssuesSearchResult,
    IssuesSearchResultAttributes: IssuesSearchResultAttributes,
    IssuesSearchResultIssueRelationship: IssuesSearchResultIssueRelationship,
    IssuesSearchResultRelationships: IssuesSearchResultRelationships,
    NullableUserRelationship: NullableUserRelationship,
    NullableUserRelationshipData: NullableUserRelationshipData,
    ProjectRelationship: ProjectRelationship,
    ProjectRelationshipData: ProjectRelationshipData,
  },
};
