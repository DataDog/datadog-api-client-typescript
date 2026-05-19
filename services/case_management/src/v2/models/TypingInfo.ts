import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AutoCloseInactiveCases } from "./AutoCloseInactiveCases";
import { AutoTransitionAssignedCases } from "./AutoTransitionAssignedCases";
import { AutomationRule } from "./AutomationRule";
import { AutomationRuleAction } from "./AutomationRuleAction";
import { AutomationRuleActionData } from "./AutomationRuleActionData";
import { AutomationRuleAttributes } from "./AutomationRuleAttributes";
import { AutomationRuleCreate } from "./AutomationRuleCreate";
import { AutomationRuleCreateAttributes } from "./AutomationRuleCreateAttributes";
import { AutomationRuleCreateRequest } from "./AutomationRuleCreateRequest";
import { AutomationRuleRelationships } from "./AutomationRuleRelationships";
import { AutomationRuleResponse } from "./AutomationRuleResponse";
import { AutomationRuleTrigger } from "./AutomationRuleTrigger";
import { AutomationRuleTriggerData } from "./AutomationRuleTriggerData";
import { AutomationRuleUpdate } from "./AutomationRuleUpdate";
import { AutomationRuleUpdateRequest } from "./AutomationRuleUpdateRequest";
import { AutomationRulesResponse } from "./AutomationRulesResponse";
import { Case } from "./Case";
import { CaseAggregateGroup } from "./CaseAggregateGroup";
import { CaseAggregateGroupBy } from "./CaseAggregateGroupBy";
import { CaseAggregateRequest } from "./CaseAggregateRequest";
import { CaseAggregateRequestAttributes } from "./CaseAggregateRequestAttributes";
import { CaseAggregateRequestData } from "./CaseAggregateRequestData";
import { CaseAggregateResponse } from "./CaseAggregateResponse";
import { CaseAggregateResponseAttributes } from "./CaseAggregateResponseAttributes";
import { CaseAggregateResponseData } from "./CaseAggregateResponseData";
import { CaseAssign } from "./CaseAssign";
import { CaseAssignAttributes } from "./CaseAssignAttributes";
import { CaseAssignRequest } from "./CaseAssignRequest";
import { CaseAttributes } from "./CaseAttributes";
import { CaseBulkUpdateRequest } from "./CaseBulkUpdateRequest";
import { CaseBulkUpdateRequestAttributes } from "./CaseBulkUpdateRequestAttributes";
import { CaseBulkUpdateRequestData } from "./CaseBulkUpdateRequestData";
import { CaseComment } from "./CaseComment";
import { CaseCommentAttributes } from "./CaseCommentAttributes";
import { CaseCommentRequest } from "./CaseCommentRequest";
import { CaseCountGroup } from "./CaseCountGroup";
import { CaseCountGroupValue } from "./CaseCountGroupValue";
import { CaseCountResponse } from "./CaseCountResponse";
import { CaseCountResponseAttributes } from "./CaseCountResponseAttributes";
import { CaseCountResponseData } from "./CaseCountResponseData";
import { CaseCreate } from "./CaseCreate";
import { CaseCreateAttributes } from "./CaseCreateAttributes";
import { CaseCreateRelationships } from "./CaseCreateRelationships";
import { CaseCreateRequest } from "./CaseCreateRequest";
import { CaseEmpty } from "./CaseEmpty";
import { CaseEmptyRequest } from "./CaseEmptyRequest";
import { CaseInsight } from "./CaseInsight";
import { CaseInsightsAttributes } from "./CaseInsightsAttributes";
import { CaseInsightsData } from "./CaseInsightsData";
import { CaseInsightsRequest } from "./CaseInsightsRequest";
import { CaseLink } from "./CaseLink";
import { CaseLinkAttributes } from "./CaseLinkAttributes";
import { CaseLinkCreate } from "./CaseLinkCreate";
import { CaseLinkCreateRequest } from "./CaseLinkCreateRequest";
import { CaseLinkResponse } from "./CaseLinkResponse";
import { CaseLinksResponse } from "./CaseLinksResponse";
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
import { CaseUpdateComment } from "./CaseUpdateComment";
import { CaseUpdateCommentAttributes } from "./CaseUpdateCommentAttributes";
import { CaseUpdateCommentRequest } from "./CaseUpdateCommentRequest";
import { CaseUpdateCustomAttribute } from "./CaseUpdateCustomAttribute";
import { CaseUpdateCustomAttributeRequest } from "./CaseUpdateCustomAttributeRequest";
import { CaseUpdateDescription } from "./CaseUpdateDescription";
import { CaseUpdateDescriptionAttributes } from "./CaseUpdateDescriptionAttributes";
import { CaseUpdateDescriptionRequest } from "./CaseUpdateDescriptionRequest";
import { CaseUpdateDueDate } from "./CaseUpdateDueDate";
import { CaseUpdateDueDateAttributes } from "./CaseUpdateDueDateAttributes";
import { CaseUpdateDueDateRequest } from "./CaseUpdateDueDateRequest";
import { CaseUpdatePriority } from "./CaseUpdatePriority";
import { CaseUpdatePriorityAttributes } from "./CaseUpdatePriorityAttributes";
import { CaseUpdatePriorityRequest } from "./CaseUpdatePriorityRequest";
import { CaseUpdateResolvedReason } from "./CaseUpdateResolvedReason";
import { CaseUpdateResolvedReasonAttributes } from "./CaseUpdateResolvedReasonAttributes";
import { CaseUpdateResolvedReasonRequest } from "./CaseUpdateResolvedReasonRequest";
import { CaseUpdateStatus } from "./CaseUpdateStatus";
import { CaseUpdateStatusAttributes } from "./CaseUpdateStatusAttributes";
import { CaseUpdateStatusRequest } from "./CaseUpdateStatusRequest";
import { CaseUpdateTitle } from "./CaseUpdateTitle";
import { CaseUpdateTitleAttributes } from "./CaseUpdateTitleAttributes";
import { CaseUpdateTitleRequest } from "./CaseUpdateTitleRequest";
import { CaseView } from "./CaseView";
import { CaseViewAttributes } from "./CaseViewAttributes";
import { CaseViewCreate } from "./CaseViewCreate";
import { CaseViewCreateAttributes } from "./CaseViewCreateAttributes";
import { CaseViewCreateRequest } from "./CaseViewCreateRequest";
import { CaseViewRelationships } from "./CaseViewRelationships";
import { CaseViewResponse } from "./CaseViewResponse";
import { CaseViewUpdate } from "./CaseViewUpdate";
import { CaseViewUpdateAttributes } from "./CaseViewUpdateAttributes";
import { CaseViewUpdateRequest } from "./CaseViewUpdateRequest";
import { CaseViewsResponse } from "./CaseViewsResponse";
import { CaseWatcher } from "./CaseWatcher";
import { CaseWatcherRelationships } from "./CaseWatcherRelationships";
import { CaseWatcherUserRelationship } from "./CaseWatcherUserRelationship";
import { CaseWatchersResponse } from "./CaseWatchersResponse";
import { CasesResponse } from "./CasesResponse";
import { CasesResponseMeta } from "./CasesResponseMeta";
import { CasesResponseMetaPagination } from "./CasesResponseMetaPagination";
import { CustomAttributeValue } from "./CustomAttributeValue";
import { IncidentRelationshipData } from "./IncidentRelationshipData";
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
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JiraIssue } from "./JiraIssue";
import { JiraIssueCreateAttributes } from "./JiraIssueCreateAttributes";
import { JiraIssueCreateData } from "./JiraIssueCreateData";
import { JiraIssueCreateRequest } from "./JiraIssueCreateRequest";
import { JiraIssueLinkAttributes } from "./JiraIssueLinkAttributes";
import { JiraIssueLinkData } from "./JiraIssueLinkData";
import { JiraIssueLinkRequest } from "./JiraIssueLinkRequest";
import { JiraIssueResult } from "./JiraIssueResult";
import { MaintenanceWindow } from "./MaintenanceWindow";
import { MaintenanceWindowAttributes } from "./MaintenanceWindowAttributes";
import { MaintenanceWindowCreate } from "./MaintenanceWindowCreate";
import { MaintenanceWindowCreateAttributes } from "./MaintenanceWindowCreateAttributes";
import { MaintenanceWindowCreateRequest } from "./MaintenanceWindowCreateRequest";
import { MaintenanceWindowResponse } from "./MaintenanceWindowResponse";
import { MaintenanceWindowUpdate } from "./MaintenanceWindowUpdate";
import { MaintenanceWindowUpdateAttributes } from "./MaintenanceWindowUpdateAttributes";
import { MaintenanceWindowUpdateRequest } from "./MaintenanceWindowUpdateRequest";
import { MaintenanceWindowsResponse } from "./MaintenanceWindowsResponse";
import { NotebookCreateData } from "./NotebookCreateData";
import { NotebookCreateRequest } from "./NotebookCreateRequest";
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
import { ProjectFavorite } from "./ProjectFavorite";
import { ProjectFavoritesResponse } from "./ProjectFavoritesResponse";
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
import { RelationshipToIncidentRequest } from "./RelationshipToIncidentRequest";
import { RelationshipToTeamLinkData } from "./RelationshipToTeamLinkData";
import { RelationshipToTeamLinks } from "./RelationshipToTeamLinks";
import { ServiceNowTicket } from "./ServiceNowTicket";
import { ServiceNowTicketCreateAttributes } from "./ServiceNowTicketCreateAttributes";
import { ServiceNowTicketCreateData } from "./ServiceNowTicketCreateData";
import { ServiceNowTicketCreateRequest } from "./ServiceNowTicketCreateRequest";
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
    AutomationRuleActionType: ["execute_workflow", "assign_agent"],
    AutomationRuleTriggerType: [
      "case_created",
      "status_transitioned",
      "attribute_value_changed",
      "event_correlation_signal_correlated",
      "case_review_approved",
      "comment_added",
    ],
    Case3rdPartyTicketStatus: ["IN_PROGRESS", "COMPLETED", "FAILED"],
    CaseAggregateResourceType: ["aggregate"],
    CaseAutomationRuleResourceType: ["rule"],
    CaseAutomationRuleState: ["ENABLED", "DISABLED"],
    CaseBulkActionType: [
      "priority",
      "status",
      "assign",
      "unassign",
      "archive",
      "unarchive",
      "jira",
      "servicenow",
      "linear",
      "update_project",
    ],
    CaseBulkResourceType: ["bulk"],
    CaseInsightType: [
      "SECURITY_SIGNAL",
      "MONITOR",
      "EVENT_CORRELATION",
      "ERROR_TRACKING",
      "CLOUD_COST_RECOMMENDATION",
      "INCIDENT",
      "SENSITIVE_DATA_SCANNER_ISSUE",
      "EVENT",
      "WATCHDOG_STORY",
      "WIDGET",
      "SECURITY_FINDING",
      "INSIGHT_SCORECARD_CAMPAIGN",
      "RESOURCE_POLICY",
      "APM_RECOMMENDATION",
      "SCM_URL",
      "PROFILING_DOWNSIZING_EXPERIMENT",
    ],
    CaseLinkResourceType: ["link"],
    CaseNotificationRuleResourceType: ["notification_rule"],
    CasePriority: ["NOT_DEFINED", "P1", "P2", "P3", "P4", "P5"],
    CaseResourceType: ["case"],
    CaseSortableField: ["created_at", "priority", "status"],
    CaseStatus: ["OPEN", "IN_PROGRESS", "CLOSED"],
    CaseStatusGroup: ["SG_OPEN", "SG_IN_PROGRESS", "SG_CLOSED"],
    CaseType: ["STANDARD"],
    CaseViewResourceType: ["view"],
    CaseWatcherResourceType: ["watcher"],
    CustomAttributeType: ["URL", "TEXT", "NUMBER", "SELECT"],
    IncidentResourceType: ["incidents"],
    JiraIssueResourceType: ["issues"],
    MaintenanceWindowResourceType: ["maintenance_window"],
    NotebookResourceType: ["notebook"],
    ProjectFavoriteResourceType: ["project_favorite"],
    ProjectResourceType: ["project"],
    ServiceNowTicketResourceType: ["tickets"],
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
    AutomationRule: AutomationRule,
    AutomationRuleAction: AutomationRuleAction,
    AutomationRuleActionData: AutomationRuleActionData,
    AutomationRuleAttributes: AutomationRuleAttributes,
    AutomationRuleCreate: AutomationRuleCreate,
    AutomationRuleCreateAttributes: AutomationRuleCreateAttributes,
    AutomationRuleCreateRequest: AutomationRuleCreateRequest,
    AutomationRuleRelationships: AutomationRuleRelationships,
    AutomationRuleResponse: AutomationRuleResponse,
    AutomationRuleTrigger: AutomationRuleTrigger,
    AutomationRuleTriggerData: AutomationRuleTriggerData,
    AutomationRuleUpdate: AutomationRuleUpdate,
    AutomationRuleUpdateRequest: AutomationRuleUpdateRequest,
    AutomationRulesResponse: AutomationRulesResponse,
    Case: Case,
    CaseAggregateGroup: CaseAggregateGroup,
    CaseAggregateGroupBy: CaseAggregateGroupBy,
    CaseAggregateRequest: CaseAggregateRequest,
    CaseAggregateRequestAttributes: CaseAggregateRequestAttributes,
    CaseAggregateRequestData: CaseAggregateRequestData,
    CaseAggregateResponse: CaseAggregateResponse,
    CaseAggregateResponseAttributes: CaseAggregateResponseAttributes,
    CaseAggregateResponseData: CaseAggregateResponseData,
    CaseAssign: CaseAssign,
    CaseAssignAttributes: CaseAssignAttributes,
    CaseAssignRequest: CaseAssignRequest,
    CaseAttributes: CaseAttributes,
    CaseBulkUpdateRequest: CaseBulkUpdateRequest,
    CaseBulkUpdateRequestAttributes: CaseBulkUpdateRequestAttributes,
    CaseBulkUpdateRequestData: CaseBulkUpdateRequestData,
    CaseComment: CaseComment,
    CaseCommentAttributes: CaseCommentAttributes,
    CaseCommentRequest: CaseCommentRequest,
    CaseCountGroup: CaseCountGroup,
    CaseCountGroupValue: CaseCountGroupValue,
    CaseCountResponse: CaseCountResponse,
    CaseCountResponseAttributes: CaseCountResponseAttributes,
    CaseCountResponseData: CaseCountResponseData,
    CaseCreate: CaseCreate,
    CaseCreateAttributes: CaseCreateAttributes,
    CaseCreateRelationships: CaseCreateRelationships,
    CaseCreateRequest: CaseCreateRequest,
    CaseEmpty: CaseEmpty,
    CaseEmptyRequest: CaseEmptyRequest,
    CaseInsight: CaseInsight,
    CaseInsightsAttributes: CaseInsightsAttributes,
    CaseInsightsData: CaseInsightsData,
    CaseInsightsRequest: CaseInsightsRequest,
    CaseLink: CaseLink,
    CaseLinkAttributes: CaseLinkAttributes,
    CaseLinkCreate: CaseLinkCreate,
    CaseLinkCreateRequest: CaseLinkCreateRequest,
    CaseLinkResponse: CaseLinkResponse,
    CaseLinksResponse: CaseLinksResponse,
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
    CaseUpdateComment: CaseUpdateComment,
    CaseUpdateCommentAttributes: CaseUpdateCommentAttributes,
    CaseUpdateCommentRequest: CaseUpdateCommentRequest,
    CaseUpdateCustomAttribute: CaseUpdateCustomAttribute,
    CaseUpdateCustomAttributeRequest: CaseUpdateCustomAttributeRequest,
    CaseUpdateDescription: CaseUpdateDescription,
    CaseUpdateDescriptionAttributes: CaseUpdateDescriptionAttributes,
    CaseUpdateDescriptionRequest: CaseUpdateDescriptionRequest,
    CaseUpdateDueDate: CaseUpdateDueDate,
    CaseUpdateDueDateAttributes: CaseUpdateDueDateAttributes,
    CaseUpdateDueDateRequest: CaseUpdateDueDateRequest,
    CaseUpdatePriority: CaseUpdatePriority,
    CaseUpdatePriorityAttributes: CaseUpdatePriorityAttributes,
    CaseUpdatePriorityRequest: CaseUpdatePriorityRequest,
    CaseUpdateResolvedReason: CaseUpdateResolvedReason,
    CaseUpdateResolvedReasonAttributes: CaseUpdateResolvedReasonAttributes,
    CaseUpdateResolvedReasonRequest: CaseUpdateResolvedReasonRequest,
    CaseUpdateStatus: CaseUpdateStatus,
    CaseUpdateStatusAttributes: CaseUpdateStatusAttributes,
    CaseUpdateStatusRequest: CaseUpdateStatusRequest,
    CaseUpdateTitle: CaseUpdateTitle,
    CaseUpdateTitleAttributes: CaseUpdateTitleAttributes,
    CaseUpdateTitleRequest: CaseUpdateTitleRequest,
    CaseView: CaseView,
    CaseViewAttributes: CaseViewAttributes,
    CaseViewCreate: CaseViewCreate,
    CaseViewCreateAttributes: CaseViewCreateAttributes,
    CaseViewCreateRequest: CaseViewCreateRequest,
    CaseViewRelationships: CaseViewRelationships,
    CaseViewResponse: CaseViewResponse,
    CaseViewUpdate: CaseViewUpdate,
    CaseViewUpdateAttributes: CaseViewUpdateAttributes,
    CaseViewUpdateRequest: CaseViewUpdateRequest,
    CaseViewsResponse: CaseViewsResponse,
    CaseWatcher: CaseWatcher,
    CaseWatcherRelationships: CaseWatcherRelationships,
    CaseWatcherUserRelationship: CaseWatcherUserRelationship,
    CaseWatchersResponse: CaseWatchersResponse,
    CasesResponse: CasesResponse,
    CasesResponseMeta: CasesResponseMeta,
    CasesResponseMetaPagination: CasesResponseMetaPagination,
    CustomAttributeValue: CustomAttributeValue,
    IncidentRelationshipData: IncidentRelationshipData,
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
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JiraIssue: JiraIssue,
    JiraIssueCreateAttributes: JiraIssueCreateAttributes,
    JiraIssueCreateData: JiraIssueCreateData,
    JiraIssueCreateRequest: JiraIssueCreateRequest,
    JiraIssueLinkAttributes: JiraIssueLinkAttributes,
    JiraIssueLinkData: JiraIssueLinkData,
    JiraIssueLinkRequest: JiraIssueLinkRequest,
    JiraIssueResult: JiraIssueResult,
    MaintenanceWindow: MaintenanceWindow,
    MaintenanceWindowAttributes: MaintenanceWindowAttributes,
    MaintenanceWindowCreate: MaintenanceWindowCreate,
    MaintenanceWindowCreateAttributes: MaintenanceWindowCreateAttributes,
    MaintenanceWindowCreateRequest: MaintenanceWindowCreateRequest,
    MaintenanceWindowResponse: MaintenanceWindowResponse,
    MaintenanceWindowUpdate: MaintenanceWindowUpdate,
    MaintenanceWindowUpdateAttributes: MaintenanceWindowUpdateAttributes,
    MaintenanceWindowUpdateRequest: MaintenanceWindowUpdateRequest,
    MaintenanceWindowsResponse: MaintenanceWindowsResponse,
    NotebookCreateData: NotebookCreateData,
    NotebookCreateRequest: NotebookCreateRequest,
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
    ProjectFavorite: ProjectFavorite,
    ProjectFavoritesResponse: ProjectFavoritesResponse,
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
    RelationshipToIncidentRequest: RelationshipToIncidentRequest,
    RelationshipToTeamLinkData: RelationshipToTeamLinkData,
    RelationshipToTeamLinks: RelationshipToTeamLinks,
    ServiceNowTicket: ServiceNowTicket,
    ServiceNowTicketCreateAttributes: ServiceNowTicketCreateAttributes,
    ServiceNowTicketCreateData: ServiceNowTicketCreateData,
    ServiceNowTicketCreateRequest: ServiceNowTicketCreateRequest,
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
