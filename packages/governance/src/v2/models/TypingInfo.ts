import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { AuditLogsEvent } from "./AuditLogsEvent";
import { AuditLogsEventAttributes } from "./AuditLogsEventAttributes";
import { AuditLogsEventsResponse } from "./AuditLogsEventsResponse";
import { AuditLogsQueryFilter } from "./AuditLogsQueryFilter";
import { AuditLogsQueryOptions } from "./AuditLogsQueryOptions";
import { AuditLogsQueryPageOptions } from "./AuditLogsQueryPageOptions";
import { AuditLogsResponseLinks } from "./AuditLogsResponseLinks";
import { AuditLogsResponseMetadata } from "./AuditLogsResponseMetadata";
import { AuditLogsResponsePage } from "./AuditLogsResponsePage";
import { AuditLogsSearchEventsRequest } from "./AuditLogsSearchEventsRequest";
import { AuditLogsWarning } from "./AuditLogsWarning";
import { CancelDataDeletionResponseBody } from "./CancelDataDeletionResponseBody";
import { ControlNotificationEventSetting } from "./ControlNotificationEventSetting";
import { ControlNotificationSettingsAttributes } from "./ControlNotificationSettingsAttributes";
import { ControlNotificationSettingsData } from "./ControlNotificationSettingsData";
import { ControlNotificationSettingsResponse } from "./ControlNotificationSettingsResponse";
import { ControlNotificationSettingsUpdateAttributes } from "./ControlNotificationSettingsUpdateAttributes";
import { ControlNotificationSettingsUpdateData } from "./ControlNotificationSettingsUpdateData";
import { ControlNotificationSettingsUpdateRequest } from "./ControlNotificationSettingsUpdateRequest";
import { ControlNotificationTarget } from "./ControlNotificationTarget";
import { CreateDataDeletionRequestBody } from "./CreateDataDeletionRequestBody";
import { CreateDataDeletionRequestBodyAttributes } from "./CreateDataDeletionRequestBodyAttributes";
import { CreateDataDeletionRequestBodyData } from "./CreateDataDeletionRequestBodyData";
import { CreateDataDeletionResponseBody } from "./CreateDataDeletionResponseBody";
import { DataDeletionResponseItem } from "./DataDeletionResponseItem";
import { DataDeletionResponseItemAttributes } from "./DataDeletionResponseItemAttributes";
import { DataDeletionResponseMeta } from "./DataDeletionResponseMeta";
import { GetDataDeletionsResponseBody } from "./GetDataDeletionsResponseBody";
import { GovernanceConfigAttributes } from "./GovernanceConfigAttributes";
import { GovernanceConfigData } from "./GovernanceConfigData";
import { GovernanceConfigResponse } from "./GovernanceConfigResponse";
import { GovernanceControlAttributes } from "./GovernanceControlAttributes";
import { GovernanceControlData } from "./GovernanceControlData";
import { GovernanceControlDetectionAttributes } from "./GovernanceControlDetectionAttributes";
import { GovernanceControlDetectionData } from "./GovernanceControlDetectionData";
import { GovernanceControlDetectionResponse } from "./GovernanceControlDetectionResponse";
import { GovernanceControlDetectionUpdateAttributes } from "./GovernanceControlDetectionUpdateAttributes";
import { GovernanceControlDetectionUpdateData } from "./GovernanceControlDetectionUpdateData";
import { GovernanceControlDetectionUpdateRequest } from "./GovernanceControlDetectionUpdateRequest";
import { GovernanceControlDetectionsResponse } from "./GovernanceControlDetectionsResponse";
import { GovernanceControlMitigationDefinition } from "./GovernanceControlMitigationDefinition";
import { GovernanceControlParameterDefinition } from "./GovernanceControlParameterDefinition";
import { GovernanceControlResponse } from "./GovernanceControlResponse";
import { GovernanceControlSupportedValue } from "./GovernanceControlSupportedValue";
import { GovernanceControlUpdateAttributes } from "./GovernanceControlUpdateAttributes";
import { GovernanceControlUpdateData } from "./GovernanceControlUpdateData";
import { GovernanceControlUpdateRequest } from "./GovernanceControlUpdateRequest";
import { GovernanceControlsResponse } from "./GovernanceControlsResponse";
import { GovernanceInsightAttributes } from "./GovernanceInsightAttributes";
import { GovernanceInsightAuditCompute } from "./GovernanceInsightAuditCompute";
import { GovernanceInsightAuditQuery } from "./GovernanceInsightAuditQuery";
import { GovernanceInsightData } from "./GovernanceInsightData";
import { GovernanceInsightEventCompute } from "./GovernanceInsightEventCompute";
import { GovernanceInsightEventQuery } from "./GovernanceInsightEventQuery";
import { GovernanceInsightMetricQuery } from "./GovernanceInsightMetricQuery";
import { GovernanceInsightPercentageQuery } from "./GovernanceInsightPercentageQuery";
import { GovernanceInsightQueryConfig } from "./GovernanceInsightQueryConfig";
import { GovernanceInsightUsageQuery } from "./GovernanceInsightUsageQuery";
import { GovernanceInsightsResponse } from "./GovernanceInsightsResponse";
import { GovernanceMitigationRequest } from "./GovernanceMitigationRequest";
import { GovernanceMitigationRequestAttributes } from "./GovernanceMitigationRequestAttributes";
import { GovernanceMitigationRequestData } from "./GovernanceMitigationRequestData";
import { GovernanceNotificationSettingsAttributes } from "./GovernanceNotificationSettingsAttributes";
import { GovernanceNotificationSettingsData } from "./GovernanceNotificationSettingsData";
import { GovernanceNotificationSettingsResponse } from "./GovernanceNotificationSettingsResponse";
import { GovernanceNotificationSettingsUpdateAttributes } from "./GovernanceNotificationSettingsUpdateAttributes";
import { GovernanceNotificationSettingsUpdateData } from "./GovernanceNotificationSettingsUpdateData";
import { GovernanceNotificationSettingsUpdateRequest } from "./GovernanceNotificationSettingsUpdateRequest";
import { HamrOrgConnectionAttributesRequest } from "./HamrOrgConnectionAttributesRequest";
import { HamrOrgConnectionAttributesResponse } from "./HamrOrgConnectionAttributesResponse";
import { HamrOrgConnectionDataRequest } from "./HamrOrgConnectionDataRequest";
import { HamrOrgConnectionDataResponse } from "./HamrOrgConnectionDataResponse";
import { HamrOrgConnectionRequest } from "./HamrOrgConnectionRequest";
import { HamrOrgConnectionResponse } from "./HamrOrgConnectionResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { TagRuleAttributes } from "./TagRuleAttributes";
import { TagRuleCreateAttributes } from "./TagRuleCreateAttributes";
import { TagRuleCreateData } from "./TagRuleCreateData";
import { TagRuleCreateRequest } from "./TagRuleCreateRequest";
import { TagRuleData } from "./TagRuleData";
import { TagRuleRelationships } from "./TagRuleRelationships";
import { TagRuleResponse } from "./TagRuleResponse";
import { TagRuleScoreAttributes } from "./TagRuleScoreAttributes";
import { TagRuleScoreData } from "./TagRuleScoreData";
import { TagRuleScoreRelationship } from "./TagRuleScoreRelationship";
import { TagRuleScoreRelationshipData } from "./TagRuleScoreRelationshipData";
import { TagRuleScoreResponse } from "./TagRuleScoreResponse";
import { TagRuleUpdateAttributes } from "./TagRuleUpdateAttributes";
import { TagRuleUpdateData } from "./TagRuleUpdateData";
import { TagRuleUpdateRequest } from "./TagRuleUpdateRequest";
import { TagRulesListResponse } from "./TagRulesListResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AuditLogsEventType: ["audit"],
    AuditLogsResponseStatus: ["done", "timeout"],
    AuditLogsSort: ["timestamp", "-timestamp"],
    ControlNotificationSettingsResourceType: ["control_notification_settings"],
    ControlNotificationTargetType: ["email", "slack", "at_mention", "case"],
    CreateDataDeletionRequestBodyDataType: ["create_deletion_req"],
    GovernanceConsoleConfigResourceType: ["governance_console_config"],
    GovernanceControlDetectionAssignmentSource: [
      "auto_resolved",
      "manual",
      "reassigned",
      "cleared",
    ],
    GovernanceControlDetectionResourceType: ["governance_control_detection"],
    GovernanceControlDetectionState: [
      "active",
      "exception",
      "mitigated",
      "inactive",
      "obsolete",
      "resolved_externally",
      "mitigation_in_progress",
    ],
    GovernanceControlDetectionUpdateState: ["exception", "active"],
    GovernanceControlResourceType: ["governance_control"],
    GovernanceInsightDirectionality: [
      "neutral",
      "increase_better",
      "decrease_better",
    ],
    GovernanceInsightResourceType: ["insight"],
    GovernanceNotificationSettingsResourceType: [
      "governance_notification_settings",
    ],
    HamrOrgConnectionStatus: [0, 1, 2, 3, 4, 5],
    HamrOrgConnectionType: ["hamr_org_connections"],
    TagRuleCreateType: ["surfacing"],
    TagRuleInclude: ["score"],
    TagRuleResourceType: ["tag_rule", "tag_policy"],
    TagRuleScoreResourceType: ["tag_rule_score", "tag_policy_score"],
    TagRuleSource: ["logs", "spans", "metrics", "rum", "feed"],
    TagRuleType: ["blocking", "surfacing"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AuditLogsEvent: AuditLogsEvent,
    AuditLogsEventAttributes: AuditLogsEventAttributes,
    AuditLogsEventsResponse: AuditLogsEventsResponse,
    AuditLogsQueryFilter: AuditLogsQueryFilter,
    AuditLogsQueryOptions: AuditLogsQueryOptions,
    AuditLogsQueryPageOptions: AuditLogsQueryPageOptions,
    AuditLogsResponseLinks: AuditLogsResponseLinks,
    AuditLogsResponseMetadata: AuditLogsResponseMetadata,
    AuditLogsResponsePage: AuditLogsResponsePage,
    AuditLogsSearchEventsRequest: AuditLogsSearchEventsRequest,
    AuditLogsWarning: AuditLogsWarning,
    CancelDataDeletionResponseBody: CancelDataDeletionResponseBody,
    ControlNotificationEventSetting: ControlNotificationEventSetting,
    ControlNotificationSettingsAttributes:
      ControlNotificationSettingsAttributes,
    ControlNotificationSettingsData: ControlNotificationSettingsData,
    ControlNotificationSettingsResponse: ControlNotificationSettingsResponse,
    ControlNotificationSettingsUpdateAttributes:
      ControlNotificationSettingsUpdateAttributes,
    ControlNotificationSettingsUpdateData:
      ControlNotificationSettingsUpdateData,
    ControlNotificationSettingsUpdateRequest:
      ControlNotificationSettingsUpdateRequest,
    ControlNotificationTarget: ControlNotificationTarget,
    CreateDataDeletionRequestBody: CreateDataDeletionRequestBody,
    CreateDataDeletionRequestBodyAttributes:
      CreateDataDeletionRequestBodyAttributes,
    CreateDataDeletionRequestBodyData: CreateDataDeletionRequestBodyData,
    CreateDataDeletionResponseBody: CreateDataDeletionResponseBody,
    DataDeletionResponseItem: DataDeletionResponseItem,
    DataDeletionResponseItemAttributes: DataDeletionResponseItemAttributes,
    DataDeletionResponseMeta: DataDeletionResponseMeta,
    GetDataDeletionsResponseBody: GetDataDeletionsResponseBody,
    GovernanceConfigAttributes: GovernanceConfigAttributes,
    GovernanceConfigData: GovernanceConfigData,
    GovernanceConfigResponse: GovernanceConfigResponse,
    GovernanceControlAttributes: GovernanceControlAttributes,
    GovernanceControlData: GovernanceControlData,
    GovernanceControlDetectionAttributes: GovernanceControlDetectionAttributes,
    GovernanceControlDetectionData: GovernanceControlDetectionData,
    GovernanceControlDetectionResponse: GovernanceControlDetectionResponse,
    GovernanceControlDetectionUpdateAttributes:
      GovernanceControlDetectionUpdateAttributes,
    GovernanceControlDetectionUpdateData: GovernanceControlDetectionUpdateData,
    GovernanceControlDetectionUpdateRequest:
      GovernanceControlDetectionUpdateRequest,
    GovernanceControlDetectionsResponse: GovernanceControlDetectionsResponse,
    GovernanceControlMitigationDefinition:
      GovernanceControlMitigationDefinition,
    GovernanceControlParameterDefinition: GovernanceControlParameterDefinition,
    GovernanceControlResponse: GovernanceControlResponse,
    GovernanceControlSupportedValue: GovernanceControlSupportedValue,
    GovernanceControlUpdateAttributes: GovernanceControlUpdateAttributes,
    GovernanceControlUpdateData: GovernanceControlUpdateData,
    GovernanceControlUpdateRequest: GovernanceControlUpdateRequest,
    GovernanceControlsResponse: GovernanceControlsResponse,
    GovernanceInsightAttributes: GovernanceInsightAttributes,
    GovernanceInsightAuditCompute: GovernanceInsightAuditCompute,
    GovernanceInsightAuditQuery: GovernanceInsightAuditQuery,
    GovernanceInsightData: GovernanceInsightData,
    GovernanceInsightEventCompute: GovernanceInsightEventCompute,
    GovernanceInsightEventQuery: GovernanceInsightEventQuery,
    GovernanceInsightMetricQuery: GovernanceInsightMetricQuery,
    GovernanceInsightPercentageQuery: GovernanceInsightPercentageQuery,
    GovernanceInsightQueryConfig: GovernanceInsightQueryConfig,
    GovernanceInsightUsageQuery: GovernanceInsightUsageQuery,
    GovernanceInsightsResponse: GovernanceInsightsResponse,
    GovernanceMitigationRequest: GovernanceMitigationRequest,
    GovernanceMitigationRequestAttributes:
      GovernanceMitigationRequestAttributes,
    GovernanceMitigationRequestData: GovernanceMitigationRequestData,
    GovernanceNotificationSettingsAttributes:
      GovernanceNotificationSettingsAttributes,
    GovernanceNotificationSettingsData: GovernanceNotificationSettingsData,
    GovernanceNotificationSettingsResponse:
      GovernanceNotificationSettingsResponse,
    GovernanceNotificationSettingsUpdateAttributes:
      GovernanceNotificationSettingsUpdateAttributes,
    GovernanceNotificationSettingsUpdateData:
      GovernanceNotificationSettingsUpdateData,
    GovernanceNotificationSettingsUpdateRequest:
      GovernanceNotificationSettingsUpdateRequest,
    HamrOrgConnectionAttributesRequest: HamrOrgConnectionAttributesRequest,
    HamrOrgConnectionAttributesResponse: HamrOrgConnectionAttributesResponse,
    HamrOrgConnectionDataRequest: HamrOrgConnectionDataRequest,
    HamrOrgConnectionDataResponse: HamrOrgConnectionDataResponse,
    HamrOrgConnectionRequest: HamrOrgConnectionRequest,
    HamrOrgConnectionResponse: HamrOrgConnectionResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    TagRuleAttributes: TagRuleAttributes,
    TagRuleCreateAttributes: TagRuleCreateAttributes,
    TagRuleCreateData: TagRuleCreateData,
    TagRuleCreateRequest: TagRuleCreateRequest,
    TagRuleData: TagRuleData,
    TagRuleRelationships: TagRuleRelationships,
    TagRuleResponse: TagRuleResponse,
    TagRuleScoreAttributes: TagRuleScoreAttributes,
    TagRuleScoreData: TagRuleScoreData,
    TagRuleScoreRelationship: TagRuleScoreRelationship,
    TagRuleScoreRelationshipData: TagRuleScoreRelationshipData,
    TagRuleScoreResponse: TagRuleScoreResponse,
    TagRuleUpdateAttributes: TagRuleUpdateAttributes,
    TagRuleUpdateData: TagRuleUpdateData,
    TagRuleUpdateRequest: TagRuleUpdateRequest,
    TagRulesListResponse: TagRulesListResponse,
  },
};
