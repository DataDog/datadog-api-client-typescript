import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AutoCloseInactiveCases } from "./AutoCloseInactiveCases";
import { AutoTransitionAssignedCases } from "./AutoTransitionAssignedCases";
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
import { CaseNotificationRule } from "./CaseNotificationRule";
import { CaseNotificationRuleAttributes } from "./CaseNotificationRuleAttributes";
import { CaseNotificationRuleCreate } from "./CaseNotificationRuleCreate";
import { CaseNotificationRuleCreateAttributes } from "./CaseNotificationRuleCreateAttributes";
import { CaseNotificationRuleCreateRequest } from "./CaseNotificationRuleCreateRequest";
import { CaseNotificationRuleRecipient } from "./CaseNotificationRuleRecipient";
import { CaseNotificationRuleRecipientData } from "./CaseNotificationRuleRecipientData";
import { CaseNotificationRuleResponse } from "./CaseNotificationRuleResponse";
import { CaseNotificationRuleTrigger } from "./CaseNotificationRuleTrigger";
import { CaseNotificationRuleTriggerData } from "./CaseNotificationRuleTriggerData";
import { CaseNotificationRuleUpdate } from "./CaseNotificationRuleUpdate";
import { CaseNotificationRuleUpdateRequest } from "./CaseNotificationRuleUpdateRequest";
import { CaseNotificationRulesResponse } from "./CaseNotificationRulesResponse";
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
import { IntegrationIncident } from "./IntegrationIncident";
import { IntegrationIncidentFieldMappingsItems } from "./IntegrationIncidentFieldMappingsItems";
import { IntegrationIncidentSeverityConfig } from "./IntegrationIncidentSeverityConfig";
import { IntegrationJira } from "./IntegrationJira";
import { IntegrationJiraAutoCreation } from "./IntegrationJiraAutoCreation";
import { IntegrationJiraMetadata } from "./IntegrationJiraMetadata";
import { IntegrationJiraSync } from "./IntegrationJiraSync";
import { IntegrationJiraSyncDueDate } from "./IntegrationJiraSyncDueDate";
import { IntegrationJiraSyncProperties } from "./IntegrationJiraSyncProperties";
import { IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties } from "./IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties";
import { IntegrationMonitor } from "./IntegrationMonitor";
import { IntegrationOnCall } from "./IntegrationOnCall";
import { IntegrationOnCallEscalationQueriesItems } from "./IntegrationOnCallEscalationQueriesItems";
import { IntegrationOnCallEscalationQueriesItemsTarget } from "./IntegrationOnCallEscalationQueriesItemsTarget";
import { IntegrationServiceNow } from "./IntegrationServiceNow";
import { IntegrationServiceNowAutoCreation } from "./IntegrationServiceNowAutoCreation";
import { IntegrationServiceNowSyncConfig } from "./IntegrationServiceNowSyncConfig";
import { IntegrationServiceNowSyncConfig139772721534496 } from "./IntegrationServiceNowSyncConfig139772721534496";
import { IntegrationServiceNowSyncConfigPriority } from "./IntegrationServiceNowSyncConfigPriority";
import { JiraIssue } from "./JiraIssue";
import { JiraIssueResult } from "./JiraIssueResult";
import { NullableUserRelationship } from "./NullableUserRelationship";
import { NullableUserRelationshipData } from "./NullableUserRelationshipData";
import { Project } from "./Project";
import { ProjectAttributes } from "./ProjectAttributes";
import { ProjectColumnsConfig } from "./ProjectColumnsConfig";
import { ProjectColumnsConfigColumnsItems } from "./ProjectColumnsConfigColumnsItems";
import { ProjectColumnsConfigColumnsItemsSort } from "./ProjectColumnsConfigColumnsItemsSort";
import { ProjectCreate } from "./ProjectCreate";
import { ProjectCreateAttributes } from "./ProjectCreateAttributes";
import { ProjectCreateRequest } from "./ProjectCreateRequest";
import { ProjectNotificationSettings } from "./ProjectNotificationSettings";
import { ProjectRelationship } from "./ProjectRelationship";
import { ProjectRelationshipData } from "./ProjectRelationshipData";
import { ProjectRelationships } from "./ProjectRelationships";
import { ProjectResponse } from "./ProjectResponse";
import { ProjectSettings } from "./ProjectSettings";
import { ProjectUpdate } from "./ProjectUpdate";
import { ProjectUpdateAttributes } from "./ProjectUpdateAttributes";
import { ProjectUpdateRequest } from "./ProjectUpdateRequest";
import { ProjectsResponse } from "./ProjectsResponse";
import { RelationshipToTeamLinkData } from "./RelationshipToTeamLinkData";
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";
import { ServiceNowTicket } from "./ServiceNowTicket";
import { ServiceNowTicketResult } from "./ServiceNowTicketResult";
import { SyncProperty } from "./SyncProperty";
import { SyncPropertyWithMapping } from "./SyncPropertyWithMapping";
import { TeamRelationshipsLinks } from "./TeamRelationshipsLinks";
import { TimelineCell } from "./TimelineCell";
import { TimelineCellAuthorUser } from "./TimelineCellAuthorUser";
import { TimelineCellAuthorUserContent } from "./TimelineCellAuthorUserContent";
import { TimelineCellContentComment } from "./TimelineCellContentComment";
import { TimelineCellResource } from "./TimelineCellResource";
import { TimelineResponse } from "./TimelineResponse";
import { UserRelationshipData } from "./UserRelationshipData";
import { UsersRelationship } from "./UsersRelationship";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    Case3rdPartyTicketStatus: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    CaseNotificationRuleResourceType: ["notification_rule"],
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
  },
  oneOfMap: {
    AnyValue: [
      "string",
      "number",
      "{ [key: string]: any; }",
      "Array<AnyValueItem>",
      "boolean",
    ],
    AnyValueItem: ["string", "number", "{ [key: string]: any; }", "boolean"],
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
    AutoCloseInactiveCases: AutoCloseInactiveCases,
    AutoTransitionAssignedCases: AutoTransitionAssignedCases,
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
    CaseNotificationRule: CaseNotificationRule,
    CaseNotificationRuleAttributes: CaseNotificationRuleAttributes,
    CaseNotificationRuleCreate: CaseNotificationRuleCreate,
    CaseNotificationRuleCreateAttributes: CaseNotificationRuleCreateAttributes,
    CaseNotificationRuleCreateRequest: CaseNotificationRuleCreateRequest,
    CaseNotificationRuleRecipient: CaseNotificationRuleRecipient,
    CaseNotificationRuleRecipientData: CaseNotificationRuleRecipientData,
    CaseNotificationRuleResponse: CaseNotificationRuleResponse,
    CaseNotificationRuleTrigger: CaseNotificationRuleTrigger,
    CaseNotificationRuleTriggerData: CaseNotificationRuleTriggerData,
    CaseNotificationRuleUpdate: CaseNotificationRuleUpdate,
    CaseNotificationRuleUpdateRequest: CaseNotificationRuleUpdateRequest,
    CaseNotificationRulesResponse: CaseNotificationRulesResponse,
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
    IntegrationIncident: IntegrationIncident,
    IntegrationIncidentFieldMappingsItems:
      IntegrationIncidentFieldMappingsItems,
    IntegrationIncidentSeverityConfig: IntegrationIncidentSeverityConfig,
    IntegrationJira: IntegrationJira,
    IntegrationJiraAutoCreation: IntegrationJiraAutoCreation,
    IntegrationJiraMetadata: IntegrationJiraMetadata,
    IntegrationJiraSync: IntegrationJiraSync,
    IntegrationJiraSyncDueDate: IntegrationJiraSyncDueDate,
    IntegrationJiraSyncProperties: IntegrationJiraSyncProperties,
    IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties:
      IntegrationJiraSyncPropertiesCustomFieldsAdditionalProperties,
    IntegrationMonitor: IntegrationMonitor,
    IntegrationOnCall: IntegrationOnCall,
    IntegrationOnCallEscalationQueriesItems:
      IntegrationOnCallEscalationQueriesItems,
    IntegrationOnCallEscalationQueriesItemsTarget:
      IntegrationOnCallEscalationQueriesItemsTarget,
    IntegrationServiceNow: IntegrationServiceNow,
    IntegrationServiceNowAutoCreation: IntegrationServiceNowAutoCreation,
    IntegrationServiceNowSyncConfig: IntegrationServiceNowSyncConfig,
    IntegrationServiceNowSyncConfig139772721534496:
      IntegrationServiceNowSyncConfig139772721534496,
    IntegrationServiceNowSyncConfigPriority:
      IntegrationServiceNowSyncConfigPriority,
    JiraIssue: JiraIssue,
    JiraIssueResult: JiraIssueResult,
    NullableUserRelationship: NullableUserRelationship,
    NullableUserRelationshipData: NullableUserRelationshipData,
    Project: Project,
    ProjectAttributes: ProjectAttributes,
    ProjectColumnsConfig: ProjectColumnsConfig,
    ProjectColumnsConfigColumnsItems: ProjectColumnsConfigColumnsItems,
    ProjectColumnsConfigColumnsItemsSort: ProjectColumnsConfigColumnsItemsSort,
    ProjectCreate: ProjectCreate,
    ProjectCreateAttributes: ProjectCreateAttributes,
    ProjectCreateRequest: ProjectCreateRequest,
    ProjectNotificationSettings: ProjectNotificationSettings,
    ProjectRelationship: ProjectRelationship,
    ProjectRelationshipData: ProjectRelationshipData,
    ProjectRelationships: ProjectRelationships,
    ProjectResponse: ProjectResponse,
    ProjectSettings: ProjectSettings,
    ProjectUpdate: ProjectUpdate,
    ProjectUpdateAttributes: ProjectUpdateAttributes,
    ProjectUpdateRequest: ProjectUpdateRequest,
    ProjectsResponse: ProjectsResponse,
    RelationshipToTeamLinkData: RelationshipToTeamLinkData,
    RelationshipToTeamLinks: RelationshipToTeamLinks,
    ServiceNowTicket: ServiceNowTicket,
    ServiceNowTicketResult: ServiceNowTicketResult,
    SyncProperty: SyncProperty,
    SyncPropertyWithMapping: SyncPropertyWithMapping,
    TeamRelationshipsLinks: TeamRelationshipsLinks,
    TimelineCell: TimelineCell,
    TimelineCellAuthorUser: TimelineCellAuthorUser,
    TimelineCellAuthorUserContent: TimelineCellAuthorUserContent,
    TimelineCellContentComment: TimelineCellContentComment,
    TimelineCellResource: TimelineCellResource,
    TimelineResponse: TimelineResponse,
    UserRelationshipData: UserRelationshipData,
    UsersRelationship: UsersRelationship,
  },
};
