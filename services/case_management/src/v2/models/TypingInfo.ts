import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Case } from "./Case";
import { CaseAssign } from "./CaseAssign";
import { CaseAssignAttributes } from "./CaseAssignAttributes";
import { CaseAssignRequest } from "./CaseAssignRequest";
import { CaseAttributes } from "./CaseAttributes";
import { CaseComment } from "./CaseComment";
import { CaseCommentAttributes } from "./CaseCommentAttributes";
import { CaseCommentRequest } from "./CaseCommentRequest";
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
import { CaseUpdateCustomAttribute } from "./CaseUpdateCustomAttribute";
import { CaseUpdateCustomAttributeRequest } from "./CaseUpdateCustomAttributeRequest";
import { CaseUpdateDescription } from "./CaseUpdateDescription";
import { CaseUpdateDescriptionAttributes } from "./CaseUpdateDescriptionAttributes";
import { CaseUpdateDescriptionRequest } from "./CaseUpdateDescriptionRequest";
import { CaseUpdatePriority } from "./CaseUpdatePriority";
import { CaseUpdatePriorityAttributes } from "./CaseUpdatePriorityAttributes";
import { CaseUpdatePriorityRequest } from "./CaseUpdatePriorityRequest";
import { CaseUpdateStatus } from "./CaseUpdateStatus";
import { CaseUpdateStatusAttributes } from "./CaseUpdateStatusAttributes";
import { CaseUpdateStatusRequest } from "./CaseUpdateStatusRequest";
import { CaseUpdateTitle } from "./CaseUpdateTitle";
import { CaseUpdateTitleAttributes } from "./CaseUpdateTitleAttributes";
import { CaseUpdateTitleRequest } from "./CaseUpdateTitleRequest";
import { CasesResponse } from "./CasesResponse";
import { CasesResponseMeta } from "./CasesResponseMeta";
import { CasesResponseMetaPagination } from "./CasesResponseMetaPagination";
import { CustomAttributeValue } from "./CustomAttributeValue";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
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
import { TimelineCell } from "./TimelineCell";
import { TimelineCellAuthorUser } from "./TimelineCellAuthorUser";
import { TimelineCellAuthorUserContent } from "./TimelineCellAuthorUserContent";
import { TimelineCellContentComment } from "./TimelineCellContentComment";
import { TimelineCellResource } from "./TimelineCellResource";
import { TimelineResponse } from "./TimelineResponse";
import { UserRelationshipData } from "./UserRelationshipData";
import { UsersRelationship } from "./UsersRelationship";
import { Watcher } from "./Watcher";
import { WatcherRelationships } from "./WatcherRelationships";
import { WatcherUserRelationship } from "./WatcherUserRelationship";
import { WatchersResponse } from "./WatchersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    Case3rdPartyTicketStatus: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CaseResourceType: ["case"],
    CaseSortableField: ["created_at", "priority", "status"],
    CaseStatus: ["OPEN", "IN_PROGRESS", "CLOSED"],
    CaseStatusGroup: ["SG_OPEN", "SG_IN_PROGRESS", "SG_CLOSED"],
    CaseType: ["STANDARD"],
    CustomAttributeType: ["URL", "TEXT", "NUMBER", "SELECT"],
    ProjectResourceType: ["project"],
    TeamLinkType: ["team_links"],
    TimelineCellAuthorUserType: ["USER"],
    TimelineCellResourceType: ["timeline_cell"],
    TimelineCellType: ["COMMENT"],
    UserResourceType: ["user"],
    WatcherResourceType: ["watcher"],
  },
  oneOfMap: {
    CustomAttributeValuesUnion: [
      "string",
      "Array<string>",
      "number",
      "Array<number>",
    ],
    TimelineCellAuthor: ["TimelineCellAuthorUser"],
    TimelineCellContent: ["TimelineCellContentComment"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Case: Case,
    CaseAssign: CaseAssign,
    CaseAssignAttributes: CaseAssignAttributes,
    CaseAssignRequest: CaseAssignRequest,
    CaseAttributes: CaseAttributes,
    CaseComment: CaseComment,
    CaseCommentAttributes: CaseCommentAttributes,
    CaseCommentRequest: CaseCommentRequest,
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
    CaseUpdateCustomAttribute: CaseUpdateCustomAttribute,
    CaseUpdateCustomAttributeRequest: CaseUpdateCustomAttributeRequest,
    CaseUpdateDescription: CaseUpdateDescription,
    CaseUpdateDescriptionAttributes: CaseUpdateDescriptionAttributes,
    CaseUpdateDescriptionRequest: CaseUpdateDescriptionRequest,
    CaseUpdatePriority: CaseUpdatePriority,
    CaseUpdatePriorityAttributes: CaseUpdatePriorityAttributes,
    CaseUpdatePriorityRequest: CaseUpdatePriorityRequest,
    CaseUpdateStatus: CaseUpdateStatus,
    CaseUpdateStatusAttributes: CaseUpdateStatusAttributes,
    CaseUpdateStatusRequest: CaseUpdateStatusRequest,
    CaseUpdateTitle: CaseUpdateTitle,
    CaseUpdateTitleAttributes: CaseUpdateTitleAttributes,
    CaseUpdateTitleRequest: CaseUpdateTitleRequest,
    CasesResponse: CasesResponse,
    CasesResponseMeta: CasesResponseMeta,
    CasesResponseMetaPagination: CasesResponseMetaPagination,
    CustomAttributeValue: CustomAttributeValue,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
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
    TimelineCell: TimelineCell,
    TimelineCellAuthorUser: TimelineCellAuthorUser,
    TimelineCellAuthorUserContent: TimelineCellAuthorUserContent,
    TimelineCellContentComment: TimelineCellContentComment,
    TimelineCellResource: TimelineCellResource,
    TimelineResponse: TimelineResponse,
    UserRelationshipData: UserRelationshipData,
    UsersRelationship: UsersRelationship,
    Watcher: Watcher,
    WatcherRelationships: WatcherRelationships,
    WatcherUserRelationship: WatcherUserRelationship,
    WatchersResponse: WatchersResponse,
  },
};
