import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Case } from "./Case";
import { CaseAssign } from "./CaseAssign";
import { CaseAssignAttributes } from "./CaseAssignAttributes";
import { CaseAssignRequest } from "./CaseAssignRequest";
import { CaseAttributes } from "./CaseAttributes";
import { CaseCreate } from "./CaseCreate";
import { CaseCreateAttributes } from "./CaseCreateAttributes";
import { CaseCreateRelationships } from "./CaseCreateRelationships";
import { CaseCreateRequest } from "./CaseCreateRequest";
import { CaseEmpty } from "./CaseEmpty";
import { CaseEmptyRequest } from "./CaseEmptyRequest";
import { CaseRelationships } from "./CaseRelationships";
import { CaseResponse } from "./CaseResponse";
import { CaseUpdateAttributes } from "./CaseUpdateAttributes";
import { CaseUpdateAttributesAttributes } from "./CaseUpdateAttributesAttributes";
import { CaseUpdateAttributesRequest } from "./CaseUpdateAttributesRequest";
import { CaseUpdatePriority } from "./CaseUpdatePriority";
import { CaseUpdatePriorityAttributes } from "./CaseUpdatePriorityAttributes";
import { CaseUpdatePriorityRequest } from "./CaseUpdatePriorityRequest";
import { CaseUpdateStatus } from "./CaseUpdateStatus";
import { CaseUpdateStatusAttributes } from "./CaseUpdateStatusAttributes";
import { CaseUpdateStatusRequest } from "./CaseUpdateStatusRequest";
import { CasesResponse } from "./CasesResponse";
import { CasesResponseMeta } from "./CasesResponseMeta";
import { CasesResponseMetaPagination } from "./CasesResponseMetaPagination";
import { JiraIssue } from "./JiraIssue";
import { JiraIssueResult } from "./JiraIssueResult";
import { NullableUserRelationship } from "./NullableUserRelationship";
import { NullableUserRelationshipData } from "./NullableUserRelationshipData";
import { Project } from "./Project";
import { ProjectAttributes } from "./ProjectAttributes";
import { ProjectCreate } from "./ProjectCreate";
import { ProjectCreateAttributes } from "./ProjectCreateAttributes";
import { ProjectCreateRequest } from "./ProjectCreateRequest";
import { ProjectRelationship } from "./ProjectRelationship";
import { ProjectRelationshipData } from "./ProjectRelationshipData";
import { ProjectRelationships } from "./ProjectRelationships";
import { ProjectResponse } from "./ProjectResponse";
import { ProjectsResponse } from "./ProjectsResponse";
import { RelationshipToTeamLinkData } from "./RelationshipToTeamLinkData";
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";
import { ServiceNowTicket } from "./ServiceNowTicket";
import { ServiceNowTicketResult } from "./ServiceNowTicketResult";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";
import { UserRelationshipData } from "./UserRelationshipData";
import { UsersRelationship } from "./UsersRelationship";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    Case3rdPartyTicketStatus: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CaseResourceType: ["case"],
    CaseSortableField: ["created_at", "priority", "status"],
    CaseStatus: ["OPEN", "IN_PROGRESS", "CLOSED"],
    CaseType: ["STANDARD"],
    ProjectResourceType: ["project"],
    TeamLinkType: ["team_links"],
    UserResourceType: ["user"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Case: Case,
    CaseAssign: CaseAssign,
    CaseAssignAttributes: CaseAssignAttributes,
    CaseAssignRequest: CaseAssignRequest,
    CaseAttributes: CaseAttributes,
    CaseCreate: CaseCreate,
    CaseCreateAttributes: CaseCreateAttributes,
    CaseCreateRelationships: CaseCreateRelationships,
    CaseCreateRequest: CaseCreateRequest,
    CaseEmpty: CaseEmpty,
    CaseEmptyRequest: CaseEmptyRequest,
    CaseRelationships: CaseRelationships,
    CaseResponse: CaseResponse,
    CaseUpdateAttributes: CaseUpdateAttributes,
    CaseUpdateAttributesAttributes: CaseUpdateAttributesAttributes,
    CaseUpdateAttributesRequest: CaseUpdateAttributesRequest,
    CaseUpdatePriority: CaseUpdatePriority,
    CaseUpdatePriorityAttributes: CaseUpdatePriorityAttributes,
    CaseUpdatePriorityRequest: CaseUpdatePriorityRequest,
    CaseUpdateStatus: CaseUpdateStatus,
    CaseUpdateStatusAttributes: CaseUpdateStatusAttributes,
    CaseUpdateStatusRequest: CaseUpdateStatusRequest,
    CasesResponse: CasesResponse,
    CasesResponseMeta: CasesResponseMeta,
    CasesResponseMetaPagination: CasesResponseMetaPagination,
    JiraIssue: JiraIssue,
    JiraIssueResult: JiraIssueResult,
    NullableUserRelationship: NullableUserRelationship,
    NullableUserRelationshipData: NullableUserRelationshipData,
    Project: Project,
    ProjectAttributes: ProjectAttributes,
    ProjectCreate: ProjectCreate,
    ProjectCreateAttributes: ProjectCreateAttributes,
    ProjectCreateRequest: ProjectCreateRequest,
    ProjectRelationship: ProjectRelationship,
    ProjectRelationshipData: ProjectRelationshipData,
    ProjectRelationships: ProjectRelationships,
    ProjectResponse: ProjectResponse,
    ProjectsResponse: ProjectsResponse,
    RelationshipToTeamLinkData: RelationshipToTeamLinkData,
    RelationshipToTeamLinks: RelationshipToTeamLinks,
    ServiceNowTicket: ServiceNowTicket,
    ServiceNowTicketResult: ServiceNowTicketResult,
    TeamRelationshipsLinks: TeamRelationshipsLinks,
    UserRelationshipData: UserRelationshipData,
    UsersRelationship: UsersRelationship,
  },
};
