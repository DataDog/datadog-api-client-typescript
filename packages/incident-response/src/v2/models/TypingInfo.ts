import { ModelTypingInfo } from "@datadog/datadog-api-client-core";

import { APIErrorResponse } from "./APIErrorResponse";
import { Attachment } from "./Attachment";
import { AttachmentArray } from "./AttachmentArray";
import { AttachmentData } from "./AttachmentData";
import { AttachmentDataAttributes } from "./AttachmentDataAttributes";
import { AttachmentDataAttributesAttachment } from "./AttachmentDataAttributesAttachment";
import { AttachmentDataRelationships } from "./AttachmentDataRelationships";
import { ConfiguredSchedule } from "./ConfiguredSchedule";
import { ConfiguredScheduleTarget } from "./ConfiguredScheduleTarget";
import { ConfiguredScheduleTargetAttributes } from "./ConfiguredScheduleTargetAttributes";
import { ConfiguredScheduleTargetRelationships } from "./ConfiguredScheduleTargetRelationships";
import { ConfiguredScheduleTargetRelationshipsSchedule } from "./ConfiguredScheduleTargetRelationshipsSchedule";
import { ConfluencePostmortemSettings } from "./ConfluencePostmortemSettings";
import { CreateAttachmentRequest } from "./CreateAttachmentRequest";
import { CreateAttachmentRequestData } from "./CreateAttachmentRequestData";
import { CreateAttachmentRequestDataAttributes } from "./CreateAttachmentRequestDataAttributes";
import { CreateAttachmentRequestDataAttributesAttachment } from "./CreateAttachmentRequestDataAttributesAttachment";
import { CreateEmailNotificationChannelConfig } from "./CreateEmailNotificationChannelConfig";
import { CreateIncidentNotificationRuleRequest } from "./CreateIncidentNotificationRuleRequest";
import { CreateIncidentNotificationTemplateRequest } from "./CreateIncidentNotificationTemplateRequest";
import { CreateNotificationChannelAttributes } from "./CreateNotificationChannelAttributes";
import { CreateNotificationChannelData } from "./CreateNotificationChannelData";
import { CreateOnCallNotificationRuleRequest } from "./CreateOnCallNotificationRuleRequest";
import { CreateOnCallNotificationRuleRequestData } from "./CreateOnCallNotificationRuleRequestData";
import { CreateOverrideRequestAttributes } from "./CreateOverrideRequestAttributes";
import { CreateOverrideRequestData } from "./CreateOverrideRequestData";
import { CreateOverrideRequestRelationships } from "./CreateOverrideRequestRelationships";
import { CreateOverridesRequest } from "./CreateOverridesRequest";
import { CreatePageRequest } from "./CreatePageRequest";
import { CreatePageRequestData } from "./CreatePageRequestData";
import { CreatePageRequestDataAttributes } from "./CreatePageRequestDataAttributes";
import { CreatePageRequestDataAttributesTarget } from "./CreatePageRequestDataAttributesTarget";
import { CreatePageResponse } from "./CreatePageResponse";
import { CreatePageResponseData } from "./CreatePageResponseData";
import { CreatePhoneNotificationChannelConfig } from "./CreatePhoneNotificationChannelConfig";
import { CreateUserNotificationChannelRequest } from "./CreateUserNotificationChannelRequest";
import { DataRelationshipsTeams } from "./DataRelationshipsTeams";
import { DataRelationshipsTeamsDataItems } from "./DataRelationshipsTeamsDataItems";
import { Escalation } from "./Escalation";
import { EscalationPolicies } from "./EscalationPolicies";
import { EscalationPoliciesResponseMeta } from "./EscalationPoliciesResponseMeta";
import { EscalationPoliciesResponseMetaPage } from "./EscalationPoliciesResponseMetaPage";
import { EscalationPolicy } from "./EscalationPolicy";
import { EscalationPolicyCreateRequest } from "./EscalationPolicyCreateRequest";
import { EscalationPolicyCreateRequestData } from "./EscalationPolicyCreateRequestData";
import { EscalationPolicyCreateRequestDataAttributes } from "./EscalationPolicyCreateRequestDataAttributes";
import { EscalationPolicyCreateRequestDataAttributesStepsItems } from "./EscalationPolicyCreateRequestDataAttributesStepsItems";
import { EscalationPolicyCreateRequestDataRelationships } from "./EscalationPolicyCreateRequestDataRelationships";
import { EscalationPolicyData } from "./EscalationPolicyData";
import { EscalationPolicyDataAttributes } from "./EscalationPolicyDataAttributes";
import { EscalationPolicyDataRelationships } from "./EscalationPolicyDataRelationships";
import { EscalationPolicyDataRelationshipsSteps } from "./EscalationPolicyDataRelationshipsSteps";
import { EscalationPolicyDataRelationshipsStepsDataItems } from "./EscalationPolicyDataRelationshipsStepsDataItems";
import { EscalationPolicyListItem } from "./EscalationPolicyListItem";
import { EscalationPolicyStep } from "./EscalationPolicyStep";
import { EscalationPolicyStepAttributes } from "./EscalationPolicyStepAttributes";
import { EscalationPolicyStepRelationships } from "./EscalationPolicyStepRelationships";
import { EscalationPolicyStepTarget } from "./EscalationPolicyStepTarget";
import { EscalationPolicyStepTargetConfig } from "./EscalationPolicyStepTargetConfig";
import { EscalationPolicyStepTargetConfigSchedule } from "./EscalationPolicyStepTargetConfigSchedule";
import { EscalationPolicyUpdateRequest } from "./EscalationPolicyUpdateRequest";
import { EscalationPolicyUpdateRequestData } from "./EscalationPolicyUpdateRequestData";
import { EscalationPolicyUpdateRequestDataAttributes } from "./EscalationPolicyUpdateRequestDataAttributes";
import { EscalationPolicyUpdateRequestDataAttributesStepsItems } from "./EscalationPolicyUpdateRequestDataAttributesStepsItems";
import { EscalationPolicyUpdateRequestDataRelationships } from "./EscalationPolicyUpdateRequestDataRelationships";
import { EscalationPolicyUser } from "./EscalationPolicyUser";
import { EscalationPolicyUserAttributes } from "./EscalationPolicyUserAttributes";
import { EscalationRelationships } from "./EscalationRelationships";
import { EscalationRelationshipsResponders } from "./EscalationRelationshipsResponders";
import { EscalationRelationshipsRespondersDataItems } from "./EscalationRelationshipsRespondersDataItems";
import { EscalationTargets } from "./EscalationTargets";
import { GlobalIncidentSettingsAttributesRequest } from "./GlobalIncidentSettingsAttributesRequest";
import { GlobalIncidentSettingsAttributesResponse } from "./GlobalIncidentSettingsAttributesResponse";
import { GlobalIncidentSettingsDataRequest } from "./GlobalIncidentSettingsDataRequest";
import { GlobalIncidentSettingsDataResponse } from "./GlobalIncidentSettingsDataResponse";
import { GlobalIncidentSettingsRequest } from "./GlobalIncidentSettingsRequest";
import { GlobalIncidentSettingsResponse } from "./GlobalIncidentSettingsResponse";
import { GoogleDocsPostmortemSettings } from "./GoogleDocsPostmortemSettings";
import { GoogleMeetConfigurationReference } from "./GoogleMeetConfigurationReference";
import { GoogleMeetConfigurationReferenceData } from "./GoogleMeetConfigurationReferenceData";
import { IncidentAIPostmortemDataAttributesResponse } from "./IncidentAIPostmortemDataAttributesResponse";
import { IncidentAIPostmortemDataResponse } from "./IncidentAIPostmortemDataResponse";
import { IncidentAIPostmortemResponse } from "./IncidentAIPostmortemResponse";
import { IncidentConfigurationDataAttributesRequest } from "./IncidentConfigurationDataAttributesRequest";
import { IncidentConfigurationDataAttributesResponse } from "./IncidentConfigurationDataAttributesResponse";
import { IncidentConfigurationDataRequest } from "./IncidentConfigurationDataRequest";
import { IncidentConfigurationDataResponse } from "./IncidentConfigurationDataResponse";
import { IncidentConfigurationPatchDataAttributesRequest } from "./IncidentConfigurationPatchDataAttributesRequest";
import { IncidentConfigurationPatchDataRequest } from "./IncidentConfigurationPatchDataRequest";
import { IncidentConfigurationPatchRequest } from "./IncidentConfigurationPatchRequest";
import { IncidentConfigurationRelationships } from "./IncidentConfigurationRelationships";
import { IncidentConfigurationRequest } from "./IncidentConfigurationRequest";
import { IncidentConfigurationResponse } from "./IncidentConfigurationResponse";
import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateData } from "./IncidentCreateData";
import { IncidentCreateOnCallPageDataAttributesRequest } from "./IncidentCreateOnCallPageDataAttributesRequest";
import { IncidentCreateOnCallPageDataRequest } from "./IncidentCreateOnCallPageDataRequest";
import { IncidentCreateOnCallPageRequest } from "./IncidentCreateOnCallPageRequest";
import { IncidentCreatePageFromIncidentDataAttributesRequest } from "./IncidentCreatePageFromIncidentDataAttributesRequest";
import { IncidentCreatePageFromIncidentDataRequest } from "./IncidentCreatePageFromIncidentDataRequest";
import { IncidentCreatePageFromIncidentRequest } from "./IncidentCreatePageFromIncidentRequest";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentCreateRequest } from "./IncidentCreateRequest";
import { IncidentFieldAttributesMultipleValue } from "./IncidentFieldAttributesMultipleValue";
import { IncidentFieldAttributesSingleValue } from "./IncidentFieldAttributesSingleValue";
import { IncidentGoogleChatConfigurationDataAttributesRequest } from "./IncidentGoogleChatConfigurationDataAttributesRequest";
import { IncidentGoogleChatConfigurationDataAttributesResponse } from "./IncidentGoogleChatConfigurationDataAttributesResponse";
import { IncidentGoogleChatConfigurationDataRequest } from "./IncidentGoogleChatConfigurationDataRequest";
import { IncidentGoogleChatConfigurationDataResponse } from "./IncidentGoogleChatConfigurationDataResponse";
import { IncidentGoogleChatConfigurationPatchDataAttributesRequest } from "./IncidentGoogleChatConfigurationPatchDataAttributesRequest";
import { IncidentGoogleChatConfigurationPatchDataRequest } from "./IncidentGoogleChatConfigurationPatchDataRequest";
import { IncidentGoogleChatConfigurationPatchRequest } from "./IncidentGoogleChatConfigurationPatchRequest";
import { IncidentGoogleChatConfigurationRelationships } from "./IncidentGoogleChatConfigurationRelationships";
import { IncidentGoogleChatConfigurationRelationshipsRequest } from "./IncidentGoogleChatConfigurationRelationshipsRequest";
import { IncidentGoogleChatConfigurationRequest } from "./IncidentGoogleChatConfigurationRequest";
import { IncidentGoogleChatConfigurationResponse } from "./IncidentGoogleChatConfigurationResponse";
import { IncidentGoogleMeetConfigurationDataAttributesRequest } from "./IncidentGoogleMeetConfigurationDataAttributesRequest";
import { IncidentGoogleMeetConfigurationDataAttributesResponse } from "./IncidentGoogleMeetConfigurationDataAttributesResponse";
import { IncidentGoogleMeetConfigurationDataRequest } from "./IncidentGoogleMeetConfigurationDataRequest";
import { IncidentGoogleMeetConfigurationDataResponse } from "./IncidentGoogleMeetConfigurationDataResponse";
import { IncidentGoogleMeetConfigurationPatchDataAttributesRequest } from "./IncidentGoogleMeetConfigurationPatchDataAttributesRequest";
import { IncidentGoogleMeetConfigurationPatchDataRequest } from "./IncidentGoogleMeetConfigurationPatchDataRequest";
import { IncidentGoogleMeetConfigurationPatchRequest } from "./IncidentGoogleMeetConfigurationPatchRequest";
import { IncidentGoogleMeetConfigurationRelationships } from "./IncidentGoogleMeetConfigurationRelationships";
import { IncidentGoogleMeetConfigurationRelationshipsRequest } from "./IncidentGoogleMeetConfigurationRelationshipsRequest";
import { IncidentGoogleMeetConfigurationRequest } from "./IncidentGoogleMeetConfigurationRequest";
import { IncidentGoogleMeetConfigurationResponse } from "./IncidentGoogleMeetConfigurationResponse";
import { IncidentHandleAttributesFields } from "./IncidentHandleAttributesFields";
import { IncidentHandleAttributesRequest } from "./IncidentHandleAttributesRequest";
import { IncidentHandleAttributesResponse } from "./IncidentHandleAttributesResponse";
import { IncidentHandleDataRequest } from "./IncidentHandleDataRequest";
import { IncidentHandleDataResponse } from "./IncidentHandleDataResponse";
import { IncidentHandleRelationship } from "./IncidentHandleRelationship";
import { IncidentHandleRelationshipData } from "./IncidentHandleRelationshipData";
import { IncidentHandleRelationships } from "./IncidentHandleRelationships";
import { IncidentHandleRelationshipsRequest } from "./IncidentHandleRelationshipsRequest";
import { IncidentHandleRequest } from "./IncidentHandleRequest";
import { IncidentHandleResponse } from "./IncidentHandleResponse";
import { IncidentHandlesResponse } from "./IncidentHandlesResponse";
import { IncidentImpactAttributes } from "./IncidentImpactAttributes";
import { IncidentImpactCreateAttributes } from "./IncidentImpactCreateAttributes";
import { IncidentImpactCreateData } from "./IncidentImpactCreateData";
import { IncidentImpactCreateRequest } from "./IncidentImpactCreateRequest";
import { IncidentImpactFieldChoice } from "./IncidentImpactFieldChoice";
import { IncidentImpactFieldDataAttributesRequest } from "./IncidentImpactFieldDataAttributesRequest";
import { IncidentImpactFieldDataAttributesResponse } from "./IncidentImpactFieldDataAttributesResponse";
import { IncidentImpactFieldDataRequest } from "./IncidentImpactFieldDataRequest";
import { IncidentImpactFieldDataResponse } from "./IncidentImpactFieldDataResponse";
import { IncidentImpactFieldRelationships } from "./IncidentImpactFieldRelationships";
import { IncidentImpactFieldRelationshipsRequest } from "./IncidentImpactFieldRelationshipsRequest";
import { IncidentImpactFieldRequest } from "./IncidentImpactFieldRequest";
import { IncidentImpactFieldResponse } from "./IncidentImpactFieldResponse";
import { IncidentImpactFieldsResponse } from "./IncidentImpactFieldsResponse";
import { IncidentImpactPatchAttributes } from "./IncidentImpactPatchAttributes";
import { IncidentImpactPatchData } from "./IncidentImpactPatchData";
import { IncidentImpactPatchRequest } from "./IncidentImpactPatchRequest";
import { IncidentImpactRelationships } from "./IncidentImpactRelationships";
import { IncidentImpactResponse } from "./IncidentImpactResponse";
import { IncidentImpactResponseData } from "./IncidentImpactResponseData";
import { IncidentImpactsResponse } from "./IncidentImpactsResponse";
import { IncidentImportFieldAttributesMultipleValue } from "./IncidentImportFieldAttributesMultipleValue";
import { IncidentImportFieldAttributesSingleValue } from "./IncidentImportFieldAttributesSingleValue";
import { IncidentImportRelationships } from "./IncidentImportRelationships";
import { IncidentImportRequest } from "./IncidentImportRequest";
import { IncidentImportRequestAttributes } from "./IncidentImportRequestAttributes";
import { IncidentImportRequestData } from "./IncidentImportRequestData";
import { IncidentImportResponse } from "./IncidentImportResponse";
import { IncidentImportResponseAttributes } from "./IncidentImportResponseAttributes";
import { IncidentImportResponseData } from "./IncidentImportResponseData";
import { IncidentImportResponseRelationships } from "./IncidentImportResponseRelationships";
import { IncidentIntegrationMetadataAttributes } from "./IncidentIntegrationMetadataAttributes";
import { IncidentIntegrationMetadataCreateData } from "./IncidentIntegrationMetadataCreateData";
import { IncidentIntegrationMetadataCreateRequest } from "./IncidentIntegrationMetadataCreateRequest";
import { IncidentIntegrationMetadataListResponse } from "./IncidentIntegrationMetadataListResponse";
import { IncidentIntegrationMetadataPatchData } from "./IncidentIntegrationMetadataPatchData";
import { IncidentIntegrationMetadataPatchRequest } from "./IncidentIntegrationMetadataPatchRequest";
import { IncidentIntegrationMetadataResponse } from "./IncidentIntegrationMetadataResponse";
import { IncidentIntegrationMetadataResponseData } from "./IncidentIntegrationMetadataResponseData";
import { IncidentIntegrationRelationships } from "./IncidentIntegrationRelationships";
import { IncidentNonDatadogCreator } from "./IncidentNonDatadogCreator";
import { IncidentNotificationHandle } from "./IncidentNotificationHandle";
import { IncidentNotificationRule } from "./IncidentNotificationRule";
import { IncidentNotificationRuleArray } from "./IncidentNotificationRuleArray";
import { IncidentNotificationRuleArrayMeta } from "./IncidentNotificationRuleArrayMeta";
import { IncidentNotificationRuleArrayMetaPage } from "./IncidentNotificationRuleArrayMetaPage";
import { IncidentNotificationRuleAttributes } from "./IncidentNotificationRuleAttributes";
import { IncidentNotificationRuleConditionsItems } from "./IncidentNotificationRuleConditionsItems";
import { IncidentNotificationRuleCreateAttributes } from "./IncidentNotificationRuleCreateAttributes";
import { IncidentNotificationRuleCreateData } from "./IncidentNotificationRuleCreateData";
import { IncidentNotificationRuleCreateDataRelationships } from "./IncidentNotificationRuleCreateDataRelationships";
import { IncidentNotificationRuleRelationships } from "./IncidentNotificationRuleRelationships";
import { IncidentNotificationRuleResponseData } from "./IncidentNotificationRuleResponseData";
import { IncidentNotificationRuleUpdateData } from "./IncidentNotificationRuleUpdateData";
import { IncidentNotificationTemplate } from "./IncidentNotificationTemplate";
import { IncidentNotificationTemplateArray } from "./IncidentNotificationTemplateArray";
import { IncidentNotificationTemplateArrayMeta } from "./IncidentNotificationTemplateArrayMeta";
import { IncidentNotificationTemplateArrayMetaPage } from "./IncidentNotificationTemplateArrayMetaPage";
import { IncidentNotificationTemplateAttributes } from "./IncidentNotificationTemplateAttributes";
import { IncidentNotificationTemplateCreateAttributes } from "./IncidentNotificationTemplateCreateAttributes";
import { IncidentNotificationTemplateCreateData } from "./IncidentNotificationTemplateCreateData";
import { IncidentNotificationTemplateCreateDataRelationships } from "./IncidentNotificationTemplateCreateDataRelationships";
import { IncidentNotificationTemplateObject } from "./IncidentNotificationTemplateObject";
import { IncidentNotificationTemplateRelationships } from "./IncidentNotificationTemplateRelationships";
import { IncidentNotificationTemplateResponseData } from "./IncidentNotificationTemplateResponseData";
import { IncidentNotificationTemplateUpdateAttributes } from "./IncidentNotificationTemplateUpdateAttributes";
import { IncidentNotificationTemplateUpdateData } from "./IncidentNotificationTemplateUpdateData";
import { IncidentOnCallPageDataAttributesRequest } from "./IncidentOnCallPageDataAttributesRequest";
import { IncidentOnCallPageDataRequest } from "./IncidentOnCallPageDataRequest";
import { IncidentOnCallPageLinkRequest } from "./IncidentOnCallPageLinkRequest";
import { IncidentOnCallPageTarget } from "./IncidentOnCallPageTarget";
import { IncidentOrgSettingsDataAttributesResponse } from "./IncidentOrgSettingsDataAttributesResponse";
import { IncidentOrgSettingsDataResponse } from "./IncidentOrgSettingsDataResponse";
import { IncidentOrgSettingsListResponse } from "./IncidentOrgSettingsListResponse";
import { IncidentOrgSettingsRelationships } from "./IncidentOrgSettingsRelationships";
import { IncidentOrgSettingsResponse } from "./IncidentOrgSettingsResponse";
import { IncidentPageRoleReference } from "./IncidentPageRoleReference";
import { IncidentPageTarget } from "./IncidentPageTarget";
import { IncidentPageUUIDDataResponse } from "./IncidentPageUUIDDataResponse";
import { IncidentPageUUIDResponse } from "./IncidentPageUUIDResponse";
import { IncidentResponderDataAttributesResponse } from "./IncidentResponderDataAttributesResponse";
import { IncidentResponderDataRequest } from "./IncidentResponderDataRequest";
import { IncidentResponderDataResponse } from "./IncidentResponderDataResponse";
import { IncidentResponderRelationships } from "./IncidentResponderRelationships";
import { IncidentResponderRelationshipsRequest } from "./IncidentResponderRelationshipsRequest";
import { IncidentResponderRequest } from "./IncidentResponderRequest";
import { IncidentResponderResponse } from "./IncidentResponderResponse";
import { IncidentResponderRoleAssignmentRelationshipData } from "./IncidentResponderRoleAssignmentRelationshipData";
import { IncidentResponderRoleAssignmentsRelationship } from "./IncidentResponderRoleAssignmentsRelationship";
import { IncidentResponderUserRelationship } from "./IncidentResponderUserRelationship";
import { IncidentResponderUserRelationshipData } from "./IncidentResponderUserRelationshipData";
import { IncidentRespondersPagination } from "./IncidentRespondersPagination";
import { IncidentRespondersResponse } from "./IncidentRespondersResponse";
import { IncidentRespondersResponseMeta } from "./IncidentRespondersResponseMeta";
import { IncidentRespondersResponseMetaPage } from "./IncidentRespondersResponseMetaPage";
import { IncidentResponse } from "./IncidentResponse";
import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
import { IncidentRoleAssignmentDataAttributesResponse } from "./IncidentRoleAssignmentDataAttributesResponse";
import { IncidentRoleAssignmentDataResponse } from "./IncidentRoleAssignmentDataResponse";
import { IncidentRoleAssignmentRelationshipsResponse } from "./IncidentRoleAssignmentRelationshipsResponse";
import { IncidentRoleAssignmentResponderRelationship } from "./IncidentRoleAssignmentResponderRelationship";
import { IncidentRoleAssignmentResponderRelationshipData } from "./IncidentRoleAssignmentResponderRelationshipData";
import { IncidentRoleAssignmentRoleRelationship } from "./IncidentRoleAssignmentRoleRelationship";
import { IncidentRoleAssignmentRoleRelationshipData } from "./IncidentRoleAssignmentRoleRelationshipData";
import { IncidentRuleCondition } from "./IncidentRuleCondition";
import { IncidentRuleDataAttributesRequest } from "./IncidentRuleDataAttributesRequest";
import { IncidentRuleDataAttributesResponse } from "./IncidentRuleDataAttributesResponse";
import { IncidentRuleDataRequest } from "./IncidentRuleDataRequest";
import { IncidentRuleDataResponse } from "./IncidentRuleDataResponse";
import { IncidentRulePatchDataAttributesRequest } from "./IncidentRulePatchDataAttributesRequest";
import { IncidentRulePatchDataRequest } from "./IncidentRulePatchDataRequest";
import { IncidentRulePatchRequest } from "./IncidentRulePatchRequest";
import { IncidentRuleQueryCondition } from "./IncidentRuleQueryCondition";
import { IncidentRuleRequest } from "./IncidentRuleRequest";
import { IncidentRuleResponse } from "./IncidentRuleResponse";
import { IncidentRulesResponse } from "./IncidentRulesResponse";
import { IncidentSearchResponse } from "./IncidentSearchResponse";
import { IncidentSearchResponseAttributes } from "./IncidentSearchResponseAttributes";
import { IncidentSearchResponseData } from "./IncidentSearchResponseData";
import { IncidentSearchResponseFacetsData } from "./IncidentSearchResponseFacetsData";
import { IncidentSearchResponseFieldFacetData } from "./IncidentSearchResponseFieldFacetData";
import { IncidentSearchResponseIncidentsData } from "./IncidentSearchResponseIncidentsData";
import { IncidentSearchResponseMeta } from "./IncidentSearchResponseMeta";
import { IncidentSearchResponseNumericFacetData } from "./IncidentSearchResponseNumericFacetData";
import { IncidentSearchResponseNumericFacetDataAggregates } from "./IncidentSearchResponseNumericFacetDataAggregates";
import { IncidentSearchResponsePropertyFieldFacetData } from "./IncidentSearchResponsePropertyFieldFacetData";
import { IncidentSearchResponseUserFacetData } from "./IncidentSearchResponseUserFacetData";
import { IncidentServiceNowRecordDataAttributesRequest } from "./IncidentServiceNowRecordDataAttributesRequest";
import { IncidentServiceNowRecordDataRequest } from "./IncidentServiceNowRecordDataRequest";
import { IncidentServiceNowRecordRequest } from "./IncidentServiceNowRecordRequest";
import { IncidentTimelineCellMarkdownCreateAttributes } from "./IncidentTimelineCellMarkdownCreateAttributes";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";
import { IncidentTimestampOverrideDataAttributesRequest } from "./IncidentTimestampOverrideDataAttributesRequest";
import { IncidentTimestampOverrideDataAttributesResponse } from "./IncidentTimestampOverrideDataAttributesResponse";
import { IncidentTimestampOverrideDataRequest } from "./IncidentTimestampOverrideDataRequest";
import { IncidentTimestampOverrideDataResponse } from "./IncidentTimestampOverrideDataResponse";
import { IncidentTimestampOverridePatchDataAttributesRequest } from "./IncidentTimestampOverridePatchDataAttributesRequest";
import { IncidentTimestampOverridePatchDataRequest } from "./IncidentTimestampOverridePatchDataRequest";
import { IncidentTimestampOverridePatchRequest } from "./IncidentTimestampOverridePatchRequest";
import { IncidentTimestampOverrideRelationships } from "./IncidentTimestampOverrideRelationships";
import { IncidentTimestampOverrideRequest } from "./IncidentTimestampOverrideRequest";
import { IncidentTimestampOverrideResponse } from "./IncidentTimestampOverrideResponse";
import { IncidentTimestampOverridesResponse } from "./IncidentTimestampOverridesResponse";
import { IncidentTodoAnonymousAssignee } from "./IncidentTodoAnonymousAssignee";
import { IncidentTodoAttributes } from "./IncidentTodoAttributes";
import { IncidentTodoCreateData } from "./IncidentTodoCreateData";
import { IncidentTodoCreateRequest } from "./IncidentTodoCreateRequest";
import { IncidentTodoListResponse } from "./IncidentTodoListResponse";
import { IncidentTodoPatchData } from "./IncidentTodoPatchData";
import { IncidentTodoPatchRequest } from "./IncidentTodoPatchRequest";
import { IncidentTodoRelationships } from "./IncidentTodoRelationships";
import { IncidentTodoResponse } from "./IncidentTodoResponse";
import { IncidentTodoResponseData } from "./IncidentTodoResponseData";
import { IncidentTypeAttributes } from "./IncidentTypeAttributes";
import { IncidentTypeConfiguration } from "./IncidentTypeConfiguration";
import { IncidentTypeCreateData } from "./IncidentTypeCreateData";
import { IncidentTypeCreateRequest } from "./IncidentTypeCreateRequest";
import { IncidentTypeListResponse } from "./IncidentTypeListResponse";
import { IncidentTypeObject } from "./IncidentTypeObject";
import { IncidentTypePatchData } from "./IncidentTypePatchData";
import { IncidentTypePatchRequest } from "./IncidentTypePatchRequest";
import { IncidentTypeRelationships } from "./IncidentTypeRelationships";
import { IncidentTypeResponse } from "./IncidentTypeResponse";
import { IncidentTypeUpdateAttributes } from "./IncidentTypeUpdateAttributes";
import { IncidentUpdateAttributes } from "./IncidentUpdateAttributes";
import { IncidentUpdateData } from "./IncidentUpdateData";
import { IncidentUpdateRelationships } from "./IncidentUpdateRelationships";
import { IncidentUpdateRequest } from "./IncidentUpdateRequest";
import { IncidentUserAttributes } from "./IncidentUserAttributes";
import { IncidentUserData } from "./IncidentUserData";
import { IncidentUserDefinedFieldAttributesCreateRequest } from "./IncidentUserDefinedFieldAttributesCreateRequest";
import { IncidentUserDefinedFieldAttributesResponse } from "./IncidentUserDefinedFieldAttributesResponse";
import { IncidentUserDefinedFieldAttributesUpdateRequest } from "./IncidentUserDefinedFieldAttributesUpdateRequest";
import { IncidentUserDefinedFieldCreateData } from "./IncidentUserDefinedFieldCreateData";
import { IncidentUserDefinedFieldCreateRelationships } from "./IncidentUserDefinedFieldCreateRelationships";
import { IncidentUserDefinedFieldCreateRequest } from "./IncidentUserDefinedFieldCreateRequest";
import { IncidentUserDefinedFieldListMeta } from "./IncidentUserDefinedFieldListMeta";
import { IncidentUserDefinedFieldListResponse } from "./IncidentUserDefinedFieldListResponse";
import { IncidentUserDefinedFieldMetadata } from "./IncidentUserDefinedFieldMetadata";
import { IncidentUserDefinedFieldRelationships } from "./IncidentUserDefinedFieldRelationships";
import { IncidentUserDefinedFieldResponse } from "./IncidentUserDefinedFieldResponse";
import { IncidentUserDefinedFieldResponseData } from "./IncidentUserDefinedFieldResponseData";
import { IncidentUserDefinedFieldUpdateData } from "./IncidentUserDefinedFieldUpdateData";
import { IncidentUserDefinedFieldUpdateRequest } from "./IncidentUserDefinedFieldUpdateRequest";
import { IncidentUserDefinedFieldValidValue } from "./IncidentUserDefinedFieldValidValue";
import { IncidentUserDefinedRoleDataAttributesRequest } from "./IncidentUserDefinedRoleDataAttributesRequest";
import { IncidentUserDefinedRoleDataAttributesResponse } from "./IncidentUserDefinedRoleDataAttributesResponse";
import { IncidentUserDefinedRoleDataRequest } from "./IncidentUserDefinedRoleDataRequest";
import { IncidentUserDefinedRoleDataResponse } from "./IncidentUserDefinedRoleDataResponse";
import { IncidentUserDefinedRoleIncidentTypeRelationship } from "./IncidentUserDefinedRoleIncidentTypeRelationship";
import { IncidentUserDefinedRoleIncidentTypeRelationshipData } from "./IncidentUserDefinedRoleIncidentTypeRelationshipData";
import { IncidentUserDefinedRolePatchDataAttributesRequest } from "./IncidentUserDefinedRolePatchDataAttributesRequest";
import { IncidentUserDefinedRolePatchDataRequest } from "./IncidentUserDefinedRolePatchDataRequest";
import { IncidentUserDefinedRolePatchRequest } from "./IncidentUserDefinedRolePatchRequest";
import { IncidentUserDefinedRolePolicy } from "./IncidentUserDefinedRolePolicy";
import { IncidentUserDefinedRoleRelationshipsRequest } from "./IncidentUserDefinedRoleRelationshipsRequest";
import { IncidentUserDefinedRoleRelationshipsResponse } from "./IncidentUserDefinedRoleRelationshipsResponse";
import { IncidentUserDefinedRoleRequest } from "./IncidentUserDefinedRoleRequest";
import { IncidentUserDefinedRoleResponse } from "./IncidentUserDefinedRoleResponse";
import { IncidentUserDefinedRolesResponse } from "./IncidentUserDefinedRolesResponse";
import { IncidentsResponse } from "./IncidentsResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { JiraIntegrationMetadata } from "./JiraIntegrationMetadata";
import { JiraIntegrationMetadataIssuesItem } from "./JiraIntegrationMetadataIssuesItem";
import { Layer } from "./Layer";
import { LayerAttributes } from "./LayerAttributes";
import { LayerAttributesInterval } from "./LayerAttributesInterval";
import { LayerRelationships } from "./LayerRelationships";
import { LayerRelationshipsMembers } from "./LayerRelationshipsMembers";
import { LayerRelationshipsMembersDataItems } from "./LayerRelationshipsMembersDataItems";
import { ListNotificationChannelsResponse } from "./ListNotificationChannelsResponse";
import { ListOnCallNotificationRulesResponse } from "./ListOnCallNotificationRulesResponse";
import { MSTeamsIntegrationMetadata } from "./MSTeamsIntegrationMetadata";
import { MSTeamsIntegrationMetadataTeamsItem } from "./MSTeamsIntegrationMetadataTeamsItem";
import { MicrosoftTeamsConfigurationReference } from "./MicrosoftTeamsConfigurationReference";
import { MicrosoftTeamsConfigurationReferenceData } from "./MicrosoftTeamsConfigurationReferenceData";
import { NotificationChannel } from "./NotificationChannel";
import { NotificationChannelAttributes } from "./NotificationChannelAttributes";
import { NotificationChannelData } from "./NotificationChannelData";
import { NotificationChannelEmailConfig } from "./NotificationChannelEmailConfig";
import { NotificationChannelPhoneConfig } from "./NotificationChannelPhoneConfig";
import { NotificationChannelPushConfig } from "./NotificationChannelPushConfig";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
import { OnCallNotificationRule } from "./OnCallNotificationRule";
import { OnCallNotificationRuleAttributes } from "./OnCallNotificationRuleAttributes";
import { OnCallNotificationRuleChannelRelationship } from "./OnCallNotificationRuleChannelRelationship";
import { OnCallNotificationRuleChannelRelationshipData } from "./OnCallNotificationRuleChannelRelationshipData";
import { OnCallNotificationRuleData } from "./OnCallNotificationRuleData";
import { OnCallNotificationRuleRelationships } from "./OnCallNotificationRuleRelationships";
import { OnCallNotificationRuleRequestAttributes } from "./OnCallNotificationRuleRequestAttributes";
import { OnCallPageAuthorRelationship } from "./OnCallPageAuthorRelationship";
import { OnCallPageAuthorRelationshipData } from "./OnCallPageAuthorRelationshipData";
import { OnCallPageData } from "./OnCallPageData";
import { OnCallPageDataAttributes } from "./OnCallPageDataAttributes";
import { OnCallPageDataRelationships } from "./OnCallPageDataRelationships";
import { OnCallPageJiraIssueRelationship } from "./OnCallPageJiraIssueRelationship";
import { OnCallPageJiraIssueRelationshipData } from "./OnCallPageJiraIssueRelationshipData";
import { OnCallPageLink } from "./OnCallPageLink";
import { OnCallPageLinkAttributes } from "./OnCallPageLinkAttributes";
import { OnCallPageLinkRelationshipData } from "./OnCallPageLinkRelationshipData";
import { OnCallPageLinksRelationship } from "./OnCallPageLinksRelationship";
import { OnCallPageLiveCall } from "./OnCallPageLiveCall";
import { OnCallPageLiveCallOver } from "./OnCallPageLiveCallOver";
import { OnCallPageRespondersRelationship } from "./OnCallPageRespondersRelationship";
import { OnCallPageResponse } from "./OnCallPageResponse";
import { OnCallPageScheduledAction } from "./OnCallPageScheduledAction";
import { OnCallPageScheduledActionAttributes } from "./OnCallPageScheduledActionAttributes";
import { OnCallPageScheduledActionRelationship } from "./OnCallPageScheduledActionRelationship";
import { OnCallPageScheduledActionRelationshipData } from "./OnCallPageScheduledActionRelationshipData";
import { OnCallPageScheduledActionRelationships } from "./OnCallPageScheduledActionRelationships";
import { OnCallPageScheduledActionRelationshipsSchedules } from "./OnCallPageScheduledActionRelationshipsSchedules";
import { OnCallPageScheduledActionRelationshipsSchedulesData } from "./OnCallPageScheduledActionRelationshipsSchedulesData";
import { OnCallPageScheduledActionRelationshipsUsers } from "./OnCallPageScheduledActionRelationshipsUsers";
import { OnCallPageServiceNowIncidentRelationship } from "./OnCallPageServiceNowIncidentRelationship";
import { OnCallPageServiceNowIncidentRelationshipData } from "./OnCallPageServiceNowIncidentRelationshipData";
import { OnCallPageTargetRelationship } from "./OnCallPageTargetRelationship";
import { OnCallPageTargetRelationshipData } from "./OnCallPageTargetRelationshipData";
import { OnCallPageTeamRoutingRuleRelationship } from "./OnCallPageTeamRoutingRuleRelationship";
import { OnCallPageTeamRoutingRuleRelationshipData } from "./OnCallPageTeamRoutingRuleRelationshipData";
import { OnCallPageUserRelationshipData } from "./OnCallPageUserRelationshipData";
import { OnCallPagesResponse } from "./OnCallPagesResponse";
import { OnCallPhoneNotificationRuleSettings } from "./OnCallPhoneNotificationRuleSettings";
import { OverrideAttributes } from "./OverrideAttributes";
import { OverrideCreateResponse } from "./OverrideCreateResponse";
import { OverrideData } from "./OverrideData";
import { OverrideRelationships } from "./OverrideRelationships";
import { OverrideRelationshipsSchedule } from "./OverrideRelationshipsSchedule";
import { OverrideRelationshipsScheduleData } from "./OverrideRelationshipsScheduleData";
import { OverrideRelationshipsUser } from "./OverrideRelationshipsUser";
import { OverrideRelationshipsUserData } from "./OverrideRelationshipsUserData";
import { Overrides } from "./Overrides";
import { PatchAttachmentRequest } from "./PatchAttachmentRequest";
import { PatchAttachmentRequestData } from "./PatchAttachmentRequestData";
import { PatchAttachmentRequestDataAttributes } from "./PatchAttachmentRequestDataAttributes";
import { PatchAttachmentRequestDataAttributesAttachment } from "./PatchAttachmentRequestDataAttributesAttachment";
import { PatchIncidentNotificationTemplateRequest } from "./PatchIncidentNotificationTemplateRequest";
import { PostmortemAttachmentRequest } from "./PostmortemAttachmentRequest";
import { PostmortemAttachmentRequestAttributes } from "./PostmortemAttachmentRequestAttributes";
import { PostmortemAttachmentRequestData } from "./PostmortemAttachmentRequestData";
import { PostmortemCell } from "./PostmortemCell";
import { PostmortemCellAttributes } from "./PostmortemCellAttributes";
import { PostmortemCellDefinition } from "./PostmortemCellDefinition";
import { PostmortemTemplateAttributesRequest } from "./PostmortemTemplateAttributesRequest";
import { PostmortemTemplateAttributesResponse } from "./PostmortemTemplateAttributesResponse";
import { PostmortemTemplateCreateRelationships } from "./PostmortemTemplateCreateRelationships";
import { PostmortemTemplateDataRequest } from "./PostmortemTemplateDataRequest";
import { PostmortemTemplateDataResponse } from "./PostmortemTemplateDataResponse";
import { PostmortemTemplateIncidentTypeRelationship } from "./PostmortemTemplateIncidentTypeRelationship";
import { PostmortemTemplateIncidentTypeRelationshipData } from "./PostmortemTemplateIncidentTypeRelationshipData";
import { PostmortemTemplateRequest } from "./PostmortemTemplateRequest";
import { PostmortemTemplateResponse } from "./PostmortemTemplateResponse";
import { PostmortemTemplateResponseRelationships } from "./PostmortemTemplateResponseRelationships";
import { PostmortemTemplateUserRelationship } from "./PostmortemTemplateUserRelationship";
import { PostmortemTemplateUserRelationshipData } from "./PostmortemTemplateUserRelationshipData";
import { PostmortemTemplatesResponse } from "./PostmortemTemplatesResponse";
import { PutIncidentNotificationRuleRequest } from "./PutIncidentNotificationRuleRequest";
import { RelationshipToIncident } from "./RelationshipToIncident";
import { RelationshipToIncidentAttachment } from "./RelationshipToIncidentAttachment";
import { RelationshipToIncidentAttachmentData } from "./RelationshipToIncidentAttachmentData";
import { RelationshipToIncidentData } from "./RelationshipToIncidentData";
import { RelationshipToIncidentImpactData } from "./RelationshipToIncidentImpactData";
import { RelationshipToIncidentImpacts } from "./RelationshipToIncidentImpacts";
import { RelationshipToIncidentIntegrationMetadataData } from "./RelationshipToIncidentIntegrationMetadataData";
import { RelationshipToIncidentIntegrationMetadatas } from "./RelationshipToIncidentIntegrationMetadatas";
import { RelationshipToIncidentNotificationTemplate } from "./RelationshipToIncidentNotificationTemplate";
import { RelationshipToIncidentNotificationTemplateData } from "./RelationshipToIncidentNotificationTemplateData";
import { RelationshipToIncidentPostmortem } from "./RelationshipToIncidentPostmortem";
import { RelationshipToIncidentPostmortemData } from "./RelationshipToIncidentPostmortemData";
import { RelationshipToIncidentResponderData } from "./RelationshipToIncidentResponderData";
import { RelationshipToIncidentResponders } from "./RelationshipToIncidentResponders";
import { RelationshipToIncidentType } from "./RelationshipToIncidentType";
import { RelationshipToIncidentTypeData } from "./RelationshipToIncidentTypeData";
import { RelationshipToIncidentUserDefinedFieldData } from "./RelationshipToIncidentUserDefinedFieldData";
import { RelationshipToIncidentUserDefinedFields } from "./RelationshipToIncidentUserDefinedFields";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { RerouteOnCallPageRequest } from "./RerouteOnCallPageRequest";
import { RerouteOnCallPageRequestData } from "./RerouteOnCallPageRequestData";
import { RerouteOnCallPageRequestDataAttributes } from "./RerouteOnCallPageRequestDataAttributes";
import { RoutingRule } from "./RoutingRule";
import { RoutingRuleAttributes } from "./RoutingRuleAttributes";
import { RoutingRuleEscalationPolicyAction } from "./RoutingRuleEscalationPolicyAction";
import { RoutingRuleEscalationPolicyActionSupportHours } from "./RoutingRuleEscalationPolicyActionSupportHours";
import { RoutingRuleRelationships } from "./RoutingRuleRelationships";
import { RoutingRuleRelationshipsPolicy } from "./RoutingRuleRelationshipsPolicy";
import { RoutingRuleRelationshipsPolicyData } from "./RoutingRuleRelationshipsPolicyData";
import { RoutingRuleRerouteToTeamAction } from "./RoutingRuleRerouteToTeamAction";
import { Schedule } from "./Schedule";
import { ScheduleCreateRequest } from "./ScheduleCreateRequest";
import { ScheduleCreateRequestData } from "./ScheduleCreateRequestData";
import { ScheduleCreateRequestDataAttributes } from "./ScheduleCreateRequestDataAttributes";
import { ScheduleCreateRequestDataAttributesLayersItems } from "./ScheduleCreateRequestDataAttributesLayersItems";
import { ScheduleCreateRequestDataRelationships } from "./ScheduleCreateRequestDataRelationships";
import { ScheduleData } from "./ScheduleData";
import { ScheduleDataAttributes } from "./ScheduleDataAttributes";
import { ScheduleDataRelationships } from "./ScheduleDataRelationships";
import { ScheduleDataRelationshipsLayers } from "./ScheduleDataRelationshipsLayers";
import { ScheduleDataRelationshipsLayersDataItems } from "./ScheduleDataRelationshipsLayersDataItems";
import { ScheduleListItem } from "./ScheduleListItem";
import { ScheduleListItemRelationships } from "./ScheduleListItemRelationships";
import { ScheduleMember } from "./ScheduleMember";
import { ScheduleMemberRelationships } from "./ScheduleMemberRelationships";
import { ScheduleMemberRelationshipsUser } from "./ScheduleMemberRelationshipsUser";
import { ScheduleMemberRelationshipsUserData } from "./ScheduleMemberRelationshipsUserData";
import { ScheduleOnCallResponderData } from "./ScheduleOnCallResponderData";
import { ScheduleOnCallResponderDataAttributes } from "./ScheduleOnCallResponderDataAttributes";
import { ScheduleOnCallResponderDataRelationships } from "./ScheduleOnCallResponderDataRelationships";
import { ScheduleOnCallResponderDataRelationshipsShifts } from "./ScheduleOnCallResponderDataRelationshipsShifts";
import { ScheduleOnCallResponderDataRelationshipsShiftsDataItems } from "./ScheduleOnCallResponderDataRelationshipsShiftsDataItems";
import { ScheduleOnCallResponders } from "./ScheduleOnCallResponders";
import { ScheduleOnCallRespondersData } from "./ScheduleOnCallRespondersData";
import { ScheduleOnCallRespondersDataAttributes } from "./ScheduleOnCallRespondersDataAttributes";
import { ScheduleOnCallRespondersDataRelationships } from "./ScheduleOnCallRespondersDataRelationships";
import { ScheduleOnCallRespondersDataRelationshipsResponders } from "./ScheduleOnCallRespondersDataRelationshipsResponders";
import { ScheduleOnCallRespondersDataRelationshipsRespondersDataItems } from "./ScheduleOnCallRespondersDataRelationshipsRespondersDataItems";
import { ScheduleOnCallRespondersDataRelationshipsSchedule } from "./ScheduleOnCallRespondersDataRelationshipsSchedule";
import { ScheduleOnCallRespondersDataRelationshipsScheduleData } from "./ScheduleOnCallRespondersDataRelationshipsScheduleData";
import { ScheduleRequestDataAttributesLayersItemsMembersItems } from "./ScheduleRequestDataAttributesLayersItemsMembersItems";
import { ScheduleRequestDataAttributesLayersItemsMembersItemsUser } from "./ScheduleRequestDataAttributesLayersItemsMembersItemsUser";
import { ScheduleTarget } from "./ScheduleTarget";
import { ScheduleUpdateRequest } from "./ScheduleUpdateRequest";
import { ScheduleUpdateRequestData } from "./ScheduleUpdateRequestData";
import { ScheduleUpdateRequestDataAttributes } from "./ScheduleUpdateRequestDataAttributes";
import { ScheduleUpdateRequestDataAttributesLayersItems } from "./ScheduleUpdateRequestDataAttributesLayersItems";
import { ScheduleUpdateRequestDataRelationships } from "./ScheduleUpdateRequestDataRelationships";
import { ScheduleUser } from "./ScheduleUser";
import { ScheduleUserAttributes } from "./ScheduleUserAttributes";
import { Schedules } from "./Schedules";
import { SchedulesResponseMeta } from "./SchedulesResponseMeta";
import { SchedulesResponseMetaPage } from "./SchedulesResponseMetaPage";
import { SendSlackMessageAction } from "./SendSlackMessageAction";
import { SendTeamsMessageAction } from "./SendTeamsMessageAction";
import { Shift } from "./Shift";
import { ShiftData } from "./ShiftData";
import { ShiftDataAttributes } from "./ShiftDataAttributes";
import { ShiftDataRelationships } from "./ShiftDataRelationships";
import { ShiftDataRelationshipsUser } from "./ShiftDataRelationshipsUser";
import { ShiftDataRelationshipsUserData } from "./ShiftDataRelationshipsUserData";
import { SlackIntegrationMetadata } from "./SlackIntegrationMetadata";
import { SlackIntegrationMetadataChannelItem } from "./SlackIntegrationMetadataChannelItem";
import { TeamOnCallResponders } from "./TeamOnCallResponders";
import { TeamOnCallRespondersData } from "./TeamOnCallRespondersData";
import { TeamOnCallRespondersDataRelationships } from "./TeamOnCallRespondersDataRelationships";
import { TeamOnCallRespondersDataRelationshipsEscalations } from "./TeamOnCallRespondersDataRelationshipsEscalations";
import { TeamOnCallRespondersDataRelationshipsEscalationsDataItems } from "./TeamOnCallRespondersDataRelationshipsEscalationsDataItems";
import { TeamOnCallRespondersDataRelationshipsResponders } from "./TeamOnCallRespondersDataRelationshipsResponders";
import { TeamOnCallRespondersDataRelationshipsRespondersDataItems } from "./TeamOnCallRespondersDataRelationshipsRespondersDataItems";
import { TeamReference } from "./TeamReference";
import { TeamReferenceAttributes } from "./TeamReferenceAttributes";
import { TeamRoutingRules } from "./TeamRoutingRules";
import { TeamRoutingRulesData } from "./TeamRoutingRulesData";
import { TeamRoutingRulesDataRelationships } from "./TeamRoutingRulesDataRelationships";
import { TeamRoutingRulesDataRelationshipsRules } from "./TeamRoutingRulesDataRelationshipsRules";
import { TeamRoutingRulesDataRelationshipsRulesDataItems } from "./TeamRoutingRulesDataRelationshipsRulesDataItems";
import { TeamRoutingRulesRequest } from "./TeamRoutingRulesRequest";
import { TeamRoutingRulesRequestData } from "./TeamRoutingRulesRequestData";
import { TeamRoutingRulesRequestDataAttributes } from "./TeamRoutingRulesRequestDataAttributes";
import { TeamRoutingRulesRequestRule } from "./TeamRoutingRulesRequestRule";
import { TeamTarget } from "./TeamTarget";
import { TimeRestriction } from "./TimeRestriction";
import { TimeRestrictions } from "./TimeRestrictions";
import { TriggerWorkflowAutomationAction } from "./TriggerWorkflowAutomationAction";
import { UpdateOnCallNotificationRuleRequest } from "./UpdateOnCallNotificationRuleRequest";
import { UpdateOnCallNotificationRuleRequestAttributes } from "./UpdateOnCallNotificationRuleRequestAttributes";
import { UpdateOnCallNotificationRuleRequestData } from "./UpdateOnCallNotificationRuleRequestData";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UserTarget } from "./UserTarget";
import { ZoomConfigurationReference } from "./ZoomConfigurationReference";
import { ZoomConfigurationReferenceData } from "./ZoomConfigurationReferenceData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AttachmentDataAttributesAttachmentType: ["postmortem", "link"],
    ConfiguredScheduleTargetType: ["schedule_target"],
    CreatePageRequestDataType: ["pages"],
    CreatePageResponseDataType: ["pages"],
    DataRelationshipsTeamsDataItemsType: ["teams"],
    EscalationPolicyCreateRequestDataType: ["policies"],
    EscalationPolicyDataRelationshipsStepsDataItemsType: ["steps"],
    EscalationPolicyDataType: ["policies"],
    EscalationPolicyStepAttributesAssignment: ["default", "round-robin"],
    EscalationPolicyStepTargetType: ["users", "schedules", "teams"],
    EscalationPolicyStepType: ["steps"],
    EscalationPolicyUpdateRequestDataType: ["policies"],
    EscalationPolicyUserType: ["users"],
    EscalationRelationshipsRespondersDataItemsType: ["users"],
    EscalationType: ["escalation_policy_steps"],
    GlobalIncidentSettingsType: ["incidents_global_settings"],
    IncidentAIPostmortemResponseType: ["get_incident_ai_postmortem_response"],
    IncidentAttachmentType: ["incident_attachments"],
    IncidentConfigurationType: ["incidents_configurations"],
    IncidentCreatePageFromIncidentType: ["page"],
    IncidentFieldAttributesSingleValueType: ["dropdown", "textbox"],
    IncidentFieldAttributesValueType: [
      "multiselect",
      "textarray",
      "metrictag",
      "autocomplete",
    ],
    IncidentGoogleChatConfigurationType: ["google_chat_configurations"],
    IncidentGoogleMeetConfigurationType: ["google_meet_configurations"],
    IncidentHandleType: ["incidents_handles"],
    IncidentImpactFieldType: ["impact_fields"],
    IncidentImpactFieldValueType: [
      "dropdown",
      "text",
      "textarray",
      "metrictag",
      "number",
      "datetime",
      "multiselect",
    ],
    IncidentImpactRelatedObject: [
      "incident",
      "created_by_user",
      "last_modified_by_user",
    ],
    IncidentImpactType: ["incident_impacts"],
    IncidentImpactsType: ["incident_impacts"],
    IncidentImportRelatedObject: [
      "last_modified_by_user",
      "created_by_user",
      "commander_user",
      "declared_by_user",
      "incident_type",
    ],
    IncidentImportVisibility: ["organization", "private"],
    IncidentIntegrationMetadataType: ["incident_integrations"],
    IncidentNotificationRuleAttributesVisibility: [
      "all",
      "organization",
      "private",
    ],
    IncidentNotificationRuleCreateAttributesVisibility: [
      "all",
      "organization",
      "private",
    ],
    IncidentNotificationRuleType: ["incident_notification_rules"],
    IncidentNotificationTemplateType: ["notification_templates"],
    IncidentOnCallPageType: ["page"],
    IncidentOrgSettingsType: ["incident_org_settings"],
    IncidentPageRoleType: [
      "incident_user_defined_roles",
      "incident_reserved_roles",
    ],
    IncidentPageTargetType: ["team_handle", "team_uuid", "user_uuid"],
    IncidentPageUUIDType: ["page_uuid"],
    IncidentPostmortemType: ["incident_postmortems"],
    IncidentRelatedObject: ["users", "attachments"],
    IncidentResponderRelatedObject: ["users", "role_assignments"],
    IncidentResponderType: ["incident_responders"],
    IncidentRespondersType: ["incident_responders"],
    IncidentRoleAssignmentType: ["incident_role_assignments"],
    IncidentRuleExecutionType: [1, 2],
    IncidentRuleResponseType: ["incidents_rules"],
    IncidentRuleTaskIDType: [
      "jira-create-issue-job",
      "notify-incident-handles-job",
      "servicenow-create-incident-job",
      "slack-create-channel-job",
      "zoom-create-meeting-job",
      "google-meet-create-meeting-job",
      "workflow-automation-job",
      "ms-teams-create-meeting-job",
      "google-chat-create-space-job",
      "zoom-suppress-summarization-job",
      "ms-teams-suppress-summarization-job",
      "google-meet-suppress-summarization-job",
    ],
    IncidentRuleTriggerType: [
      "incident_saved_trigger",
      "incident_created_trigger",
      "incident_modified_trigger",
    ],
    IncidentRuleType: ["incident_rules"],
    IncidentSearchResultsType: ["incidents_search_results"],
    IncidentSearchSortOrder: ["created", "-created"],
    IncidentServiceNowRecordPromptType: ["incident_servicenow_record_prompt"],
    IncidentSeverity: [
      "UNKNOWN",
      "SEV-0",
      "SEV-1",
      "SEV-2",
      "SEV-3",
      "SEV-4",
      "SEV-5",
    ],
    IncidentTimelineCellMarkdownContentType: ["markdown"],
    IncidentTimestampOverrideType: ["incidents_timestamp_overrides"],
    IncidentTimestampType: ["detected", "resolved", "declared"],
    IncidentTodoAnonymousAssigneeSource: ["slack", "microsoft_teams"],
    IncidentTodoType: ["incident_todos"],
    IncidentType: ["incidents"],
    IncidentTypeSlugSource: ["default", "servicenow"],
    IncidentTypeType: ["incident_types"],
    IncidentUserDefinedFieldCategory: ["what_happened", "why_it_happened"],
    IncidentUserDefinedFieldCollected: [
      "active",
      "stable",
      "resolved",
      "completed",
    ],
    IncidentUserDefinedFieldFieldType: [1, 2, 3, 4, 5, 6, 7, 8],
    IncidentUserDefinedFieldType: ["user_defined_field"],
    IncidentUserDefinedRoleType: ["incident_user_defined_roles"],
    LayerRelationshipsMembersDataItemsType: ["members"],
    LayerType: ["layers"],
    NotificationChannelEmailConfigType: ["email"],
    NotificationChannelEmailFormatType: ["html", "text"],
    NotificationChannelPhoneConfigType: ["phone"],
    NotificationChannelPushConfigType: ["push"],
    NotificationChannelType: ["notification_channels"],
    OnCallNotificationRuleCategory: ["high_urgency", "low_urgency"],
    OnCallNotificationRuleType: ["notification_rules"],
    OnCallPageDataType: ["pages"],
    OnCallPageJiraIssueType: ["jira_issues"],
    OnCallPageLinkEntityType: [
      "case",
      "incident",
      "page",
      "agent_conversation",
    ],
    OnCallPageLinkRelationshipType: [
      "relates_to",
      "causes",
      "blocks",
      "duplicates",
      "parent_of",
      "successor_of",
      "escalates_to",
      "pages",
    ],
    OnCallPageLinkType: ["links"],
    OnCallPageLiveCallOutcome: [
      "success_call_answered",
      "failure_no_responder",
      "failure_caller_abandoned",
      "failure_outside_support_hours",
      "failure_internal_error",
    ],
    OnCallPageReleaseOrigin: [
      "ack_timeout",
      "team_rules_active_hours",
      "manual_snooze",
    ],
    OnCallPageScheduledActionAttributesType: [
      "escalate",
      "resolve",
      "release",
      "retrigger",
    ],
    OnCallPageScheduledActionType: ["scheduled_actions"],
    OnCallPageServiceNowIncidentType: ["service_now_incidents"],
    OnCallPageStatus: ["triggered", "acknowledged", "resolved"],
    OnCallPageTargetRelationshipDataType: [
      "teams",
      "users",
      "cross_org_handles",
    ],
    OnCallPageTargetType: ["team_id", "team_handle", "user_id"],
    OnCallPagesSort: [
      "created_at",
      "-created_at",
      "modified_at",
      "-modified_at",
      "status",
      "-status",
      "priority",
      "-priority",
    ],
    OnCallPhoneNotificationRuleMethod: ["sms", "voice"],
    OrganizationsType: ["orgs"],
    OverrideDataType: ["overrides"],
    OverrideRelationshipsScheduleDataType: ["schedules"],
    OverrideRelationshipsUserDataType: ["users"],
    PageUrgency: ["low", "high"],
    PostmortemCellType: ["markdown"],
    PostmortemTemplateLocation: [
      "datadog_notebooks",
      "confluence",
      "google_docs",
    ],
    PostmortemTemplateType: ["postmortem_templates", "postmortem_template"],
    RerouteOnCallPageRequestDataType: ["reroute"],
    RolesType: ["roles"],
    RoutingRuleEscalationPolicyActionType: ["escalation_policy"],
    RoutingRuleRelationshipsPolicyDataType: ["policies"],
    RoutingRuleRerouteToTeamActionType: ["reroute_to_team"],
    RoutingRuleType: ["team_routing_rules"],
    ScheduleCreateRequestDataType: ["schedules"],
    ScheduleDataRelationshipsLayersDataItemsType: ["layers"],
    ScheduleDataType: ["schedules"],
    ScheduleMemberRelationshipsUserDataType: ["users"],
    ScheduleMemberType: ["members"],
    ScheduleOnCallResponderDataRelationshipsShiftsDataItemsType: ["shifts"],
    ScheduleOnCallResponderDataType: ["schedule_oncall_responder"],
    ScheduleOnCallRespondersDataRelationshipsRespondersDataItemsType: [
      "schedule_oncall_responder",
    ],
    ScheduleOnCallRespondersDataRelationshipsScheduleDataType: ["schedules"],
    ScheduleOnCallRespondersDataType: ["schedule_oncall_responders"],
    ScheduleTargetPosition: ["previous", "current", "next"],
    ScheduleTargetType: ["schedules"],
    ScheduleUpdateRequestDataType: ["schedules"],
    ScheduleUserType: ["users"],
    SendSlackMessageActionType: ["send_slack_message"],
    SendTeamsMessageActionType: ["send_teams_message"],
    ShiftDataRelationshipsUserDataType: ["users"],
    ShiftDataType: ["shifts"],
    TeamOnCallRespondersDataRelationshipsEscalationsDataItemsType: [
      "escalation_policy_steps",
    ],
    TeamOnCallRespondersDataRelationshipsRespondersDataItemsType: ["users"],
    TeamOnCallRespondersDataType: ["team_oncall_responders"],
    TeamReferenceType: ["teams"],
    TeamRoutingRulesDataRelationshipsRulesDataItemsType: ["team_routing_rules"],
    TeamRoutingRulesDataType: ["team_routing_rules"],
    TeamRoutingRulesRequestDataType: ["team_routing_rules"],
    TeamTargetType: ["teams"],
    TriggerWorkflowAutomationActionType: ["workflow"],
    Urgency: ["low", "high", "dynamic"],
    UserAttributesStatus: ["active", "deactivated", "pending"],
    UserTargetType: ["users"],
    UsersType: ["users"],
    Weekday: [
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday",
      "sunday",
    ],
  },
  oneOfMap: {
    AttachmentIncluded: ["IncidentUserData"],
    CreateNotificationChannelConfig: [
      "CreatePhoneNotificationChannelConfig",
      "CreateEmailNotificationChannelConfig",
    ],
    EscalationPolicyIncluded: [
      "EscalationPolicyStep",
      "EscalationPolicyUser",
      "ScheduleData",
      "ConfiguredSchedule",
      "TeamReference",
    ],
    EscalationTarget: [
      "TeamTarget",
      "UserTarget",
      "ScheduleTarget",
      "ConfiguredScheduleTarget",
    ],
    IncidentFieldAttributes: [
      "IncidentFieldAttributesSingleValue",
      "IncidentFieldAttributesMultipleValue",
    ],
    IncidentHandleIncludedItemResponse: [
      "IncidentUserData",
      "IncidentTypeObject",
    ],
    IncidentImportFieldAttributes: [
      "IncidentImportFieldAttributesSingleValue",
      "IncidentImportFieldAttributesMultipleValue",
    ],
    IncidentImportResponseIncludedItem: [
      "IncidentUserData",
      "IncidentTypeObject",
    ],
    IncidentIntegrationMetadataMetadata: [
      "SlackIntegrationMetadata",
      "JiraIntegrationMetadata",
      "MSTeamsIntegrationMetadata",
    ],
    IncidentIntegrationMetadataResponseIncludedItem: ["User"],
    IncidentNotificationRuleIncludedItems: [
      "User",
      "IncidentTypeObject",
      "IncidentNotificationTemplateObject",
    ],
    IncidentNotificationTemplateIncludedItems: ["User", "IncidentTypeObject"],
    IncidentResponderIncludedItem: [
      "IncidentUserData",
      "IncidentRoleAssignmentDataResponse",
    ],
    IncidentResponseIncludedItem: ["IncidentUserData", "AttachmentData"],
    IncidentTimelineCellCreateAttributes: [
      "IncidentTimelineCellMarkdownCreateAttributes",
    ],
    IncidentTodoAssignee: ["string", "IncidentTodoAnonymousAssignee"],
    IncidentTodoResponseIncludedItem: ["User"],
    IncidentUserDefinedRoleIncludedItem: [
      "IncidentUserData",
      "IncidentTypeObject",
    ],
    NotificationChannelConfig: [
      "NotificationChannelPhoneConfig",
      "NotificationChannelEmailConfig",
      "NotificationChannelPushConfig",
    ],
    OnCallNotificationRuleChannelSettings: [
      "OnCallPhoneNotificationRuleSettings",
    ],
    OnCallNotificationRulesIncluded: ["NotificationChannelData"],
    OnCallPagesIncluded: [
      "ScheduleUser",
      "TeamReference",
      "OnCallPageScheduledAction",
      "OnCallPageLink",
    ],
    OverrideIncluded: ["ScheduleUser"],
    RoutingRuleAction: [
      "SendSlackMessageAction",
      "SendTeamsMessageAction",
      "TriggerWorkflowAutomationAction",
      "RoutingRuleEscalationPolicyAction",
      "RoutingRuleRerouteToTeamAction",
    ],
    ScheduleDataIncludedItem: [
      "TeamReference",
      "Layer",
      "ScheduleMember",
      "ScheduleUser",
    ],
    ScheduleOnCallRespondersIncluded: [
      "ScheduleOnCallResponderData",
      "ShiftData",
      "ScheduleData",
      "User",
    ],
    ShiftIncluded: ["ScheduleUser"],
    TeamOnCallRespondersIncluded: ["User", "Escalation"],
    TeamRoutingRulesIncluded: ["RoutingRule"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Attachment: Attachment,
    AttachmentArray: AttachmentArray,
    AttachmentData: AttachmentData,
    AttachmentDataAttributes: AttachmentDataAttributes,
    AttachmentDataAttributesAttachment: AttachmentDataAttributesAttachment,
    AttachmentDataRelationships: AttachmentDataRelationships,
    ConfiguredSchedule: ConfiguredSchedule,
    ConfiguredScheduleTarget: ConfiguredScheduleTarget,
    ConfiguredScheduleTargetAttributes: ConfiguredScheduleTargetAttributes,
    ConfiguredScheduleTargetRelationships:
      ConfiguredScheduleTargetRelationships,
    ConfiguredScheduleTargetRelationshipsSchedule:
      ConfiguredScheduleTargetRelationshipsSchedule,
    ConfluencePostmortemSettings: ConfluencePostmortemSettings,
    CreateAttachmentRequest: CreateAttachmentRequest,
    CreateAttachmentRequestData: CreateAttachmentRequestData,
    CreateAttachmentRequestDataAttributes:
      CreateAttachmentRequestDataAttributes,
    CreateAttachmentRequestDataAttributesAttachment:
      CreateAttachmentRequestDataAttributesAttachment,
    CreateEmailNotificationChannelConfig: CreateEmailNotificationChannelConfig,
    CreateIncidentNotificationRuleRequest:
      CreateIncidentNotificationRuleRequest,
    CreateIncidentNotificationTemplateRequest:
      CreateIncidentNotificationTemplateRequest,
    CreateNotificationChannelAttributes: CreateNotificationChannelAttributes,
    CreateNotificationChannelData: CreateNotificationChannelData,
    CreateOnCallNotificationRuleRequest: CreateOnCallNotificationRuleRequest,
    CreateOnCallNotificationRuleRequestData:
      CreateOnCallNotificationRuleRequestData,
    CreateOverrideRequestAttributes: CreateOverrideRequestAttributes,
    CreateOverrideRequestData: CreateOverrideRequestData,
    CreateOverrideRequestRelationships: CreateOverrideRequestRelationships,
    CreateOverridesRequest: CreateOverridesRequest,
    CreatePageRequest: CreatePageRequest,
    CreatePageRequestData: CreatePageRequestData,
    CreatePageRequestDataAttributes: CreatePageRequestDataAttributes,
    CreatePageRequestDataAttributesTarget:
      CreatePageRequestDataAttributesTarget,
    CreatePageResponse: CreatePageResponse,
    CreatePageResponseData: CreatePageResponseData,
    CreatePhoneNotificationChannelConfig: CreatePhoneNotificationChannelConfig,
    CreateUserNotificationChannelRequest: CreateUserNotificationChannelRequest,
    DataRelationshipsTeams: DataRelationshipsTeams,
    DataRelationshipsTeamsDataItems: DataRelationshipsTeamsDataItems,
    Escalation: Escalation,
    EscalationPolicies: EscalationPolicies,
    EscalationPoliciesResponseMeta: EscalationPoliciesResponseMeta,
    EscalationPoliciesResponseMetaPage: EscalationPoliciesResponseMetaPage,
    EscalationPolicy: EscalationPolicy,
    EscalationPolicyCreateRequest: EscalationPolicyCreateRequest,
    EscalationPolicyCreateRequestData: EscalationPolicyCreateRequestData,
    EscalationPolicyCreateRequestDataAttributes:
      EscalationPolicyCreateRequestDataAttributes,
    EscalationPolicyCreateRequestDataAttributesStepsItems:
      EscalationPolicyCreateRequestDataAttributesStepsItems,
    EscalationPolicyCreateRequestDataRelationships:
      EscalationPolicyCreateRequestDataRelationships,
    EscalationPolicyData: EscalationPolicyData,
    EscalationPolicyDataAttributes: EscalationPolicyDataAttributes,
    EscalationPolicyDataRelationships: EscalationPolicyDataRelationships,
    EscalationPolicyDataRelationshipsSteps:
      EscalationPolicyDataRelationshipsSteps,
    EscalationPolicyDataRelationshipsStepsDataItems:
      EscalationPolicyDataRelationshipsStepsDataItems,
    EscalationPolicyListItem: EscalationPolicyListItem,
    EscalationPolicyStep: EscalationPolicyStep,
    EscalationPolicyStepAttributes: EscalationPolicyStepAttributes,
    EscalationPolicyStepRelationships: EscalationPolicyStepRelationships,
    EscalationPolicyStepTarget: EscalationPolicyStepTarget,
    EscalationPolicyStepTargetConfig: EscalationPolicyStepTargetConfig,
    EscalationPolicyStepTargetConfigSchedule:
      EscalationPolicyStepTargetConfigSchedule,
    EscalationPolicyUpdateRequest: EscalationPolicyUpdateRequest,
    EscalationPolicyUpdateRequestData: EscalationPolicyUpdateRequestData,
    EscalationPolicyUpdateRequestDataAttributes:
      EscalationPolicyUpdateRequestDataAttributes,
    EscalationPolicyUpdateRequestDataAttributesStepsItems:
      EscalationPolicyUpdateRequestDataAttributesStepsItems,
    EscalationPolicyUpdateRequestDataRelationships:
      EscalationPolicyUpdateRequestDataRelationships,
    EscalationPolicyUser: EscalationPolicyUser,
    EscalationPolicyUserAttributes: EscalationPolicyUserAttributes,
    EscalationRelationships: EscalationRelationships,
    EscalationRelationshipsResponders: EscalationRelationshipsResponders,
    EscalationRelationshipsRespondersDataItems:
      EscalationRelationshipsRespondersDataItems,
    EscalationTargets: EscalationTargets,
    GlobalIncidentSettingsAttributesRequest:
      GlobalIncidentSettingsAttributesRequest,
    GlobalIncidentSettingsAttributesResponse:
      GlobalIncidentSettingsAttributesResponse,
    GlobalIncidentSettingsDataRequest: GlobalIncidentSettingsDataRequest,
    GlobalIncidentSettingsDataResponse: GlobalIncidentSettingsDataResponse,
    GlobalIncidentSettingsRequest: GlobalIncidentSettingsRequest,
    GlobalIncidentSettingsResponse: GlobalIncidentSettingsResponse,
    GoogleDocsPostmortemSettings: GoogleDocsPostmortemSettings,
    GoogleMeetConfigurationReference: GoogleMeetConfigurationReference,
    GoogleMeetConfigurationReferenceData: GoogleMeetConfigurationReferenceData,
    IncidentAIPostmortemDataAttributesResponse:
      IncidentAIPostmortemDataAttributesResponse,
    IncidentAIPostmortemDataResponse: IncidentAIPostmortemDataResponse,
    IncidentAIPostmortemResponse: IncidentAIPostmortemResponse,
    IncidentConfigurationDataAttributesRequest:
      IncidentConfigurationDataAttributesRequest,
    IncidentConfigurationDataAttributesResponse:
      IncidentConfigurationDataAttributesResponse,
    IncidentConfigurationDataRequest: IncidentConfigurationDataRequest,
    IncidentConfigurationDataResponse: IncidentConfigurationDataResponse,
    IncidentConfigurationPatchDataAttributesRequest:
      IncidentConfigurationPatchDataAttributesRequest,
    IncidentConfigurationPatchDataRequest:
      IncidentConfigurationPatchDataRequest,
    IncidentConfigurationPatchRequest: IncidentConfigurationPatchRequest,
    IncidentConfigurationRelationships: IncidentConfigurationRelationships,
    IncidentConfigurationRequest: IncidentConfigurationRequest,
    IncidentConfigurationResponse: IncidentConfigurationResponse,
    IncidentCreateAttributes: IncidentCreateAttributes,
    IncidentCreateData: IncidentCreateData,
    IncidentCreateOnCallPageDataAttributesRequest:
      IncidentCreateOnCallPageDataAttributesRequest,
    IncidentCreateOnCallPageDataRequest: IncidentCreateOnCallPageDataRequest,
    IncidentCreateOnCallPageRequest: IncidentCreateOnCallPageRequest,
    IncidentCreatePageFromIncidentDataAttributesRequest:
      IncidentCreatePageFromIncidentDataAttributesRequest,
    IncidentCreatePageFromIncidentDataRequest:
      IncidentCreatePageFromIncidentDataRequest,
    IncidentCreatePageFromIncidentRequest:
      IncidentCreatePageFromIncidentRequest,
    IncidentCreateRelationships: IncidentCreateRelationships,
    IncidentCreateRequest: IncidentCreateRequest,
    IncidentFieldAttributesMultipleValue: IncidentFieldAttributesMultipleValue,
    IncidentFieldAttributesSingleValue: IncidentFieldAttributesSingleValue,
    IncidentGoogleChatConfigurationDataAttributesRequest:
      IncidentGoogleChatConfigurationDataAttributesRequest,
    IncidentGoogleChatConfigurationDataAttributesResponse:
      IncidentGoogleChatConfigurationDataAttributesResponse,
    IncidentGoogleChatConfigurationDataRequest:
      IncidentGoogleChatConfigurationDataRequest,
    IncidentGoogleChatConfigurationDataResponse:
      IncidentGoogleChatConfigurationDataResponse,
    IncidentGoogleChatConfigurationPatchDataAttributesRequest:
      IncidentGoogleChatConfigurationPatchDataAttributesRequest,
    IncidentGoogleChatConfigurationPatchDataRequest:
      IncidentGoogleChatConfigurationPatchDataRequest,
    IncidentGoogleChatConfigurationPatchRequest:
      IncidentGoogleChatConfigurationPatchRequest,
    IncidentGoogleChatConfigurationRelationships:
      IncidentGoogleChatConfigurationRelationships,
    IncidentGoogleChatConfigurationRelationshipsRequest:
      IncidentGoogleChatConfigurationRelationshipsRequest,
    IncidentGoogleChatConfigurationRequest:
      IncidentGoogleChatConfigurationRequest,
    IncidentGoogleChatConfigurationResponse:
      IncidentGoogleChatConfigurationResponse,
    IncidentGoogleMeetConfigurationDataAttributesRequest:
      IncidentGoogleMeetConfigurationDataAttributesRequest,
    IncidentGoogleMeetConfigurationDataAttributesResponse:
      IncidentGoogleMeetConfigurationDataAttributesResponse,
    IncidentGoogleMeetConfigurationDataRequest:
      IncidentGoogleMeetConfigurationDataRequest,
    IncidentGoogleMeetConfigurationDataResponse:
      IncidentGoogleMeetConfigurationDataResponse,
    IncidentGoogleMeetConfigurationPatchDataAttributesRequest:
      IncidentGoogleMeetConfigurationPatchDataAttributesRequest,
    IncidentGoogleMeetConfigurationPatchDataRequest:
      IncidentGoogleMeetConfigurationPatchDataRequest,
    IncidentGoogleMeetConfigurationPatchRequest:
      IncidentGoogleMeetConfigurationPatchRequest,
    IncidentGoogleMeetConfigurationRelationships:
      IncidentGoogleMeetConfigurationRelationships,
    IncidentGoogleMeetConfigurationRelationshipsRequest:
      IncidentGoogleMeetConfigurationRelationshipsRequest,
    IncidentGoogleMeetConfigurationRequest:
      IncidentGoogleMeetConfigurationRequest,
    IncidentGoogleMeetConfigurationResponse:
      IncidentGoogleMeetConfigurationResponse,
    IncidentHandleAttributesFields: IncidentHandleAttributesFields,
    IncidentHandleAttributesRequest: IncidentHandleAttributesRequest,
    IncidentHandleAttributesResponse: IncidentHandleAttributesResponse,
    IncidentHandleDataRequest: IncidentHandleDataRequest,
    IncidentHandleDataResponse: IncidentHandleDataResponse,
    IncidentHandleRelationship: IncidentHandleRelationship,
    IncidentHandleRelationshipData: IncidentHandleRelationshipData,
    IncidentHandleRelationships: IncidentHandleRelationships,
    IncidentHandleRelationshipsRequest: IncidentHandleRelationshipsRequest,
    IncidentHandleRequest: IncidentHandleRequest,
    IncidentHandleResponse: IncidentHandleResponse,
    IncidentHandlesResponse: IncidentHandlesResponse,
    IncidentImpactAttributes: IncidentImpactAttributes,
    IncidentImpactCreateAttributes: IncidentImpactCreateAttributes,
    IncidentImpactCreateData: IncidentImpactCreateData,
    IncidentImpactCreateRequest: IncidentImpactCreateRequest,
    IncidentImpactFieldChoice: IncidentImpactFieldChoice,
    IncidentImpactFieldDataAttributesRequest:
      IncidentImpactFieldDataAttributesRequest,
    IncidentImpactFieldDataAttributesResponse:
      IncidentImpactFieldDataAttributesResponse,
    IncidentImpactFieldDataRequest: IncidentImpactFieldDataRequest,
    IncidentImpactFieldDataResponse: IncidentImpactFieldDataResponse,
    IncidentImpactFieldRelationships: IncidentImpactFieldRelationships,
    IncidentImpactFieldRelationshipsRequest:
      IncidentImpactFieldRelationshipsRequest,
    IncidentImpactFieldRequest: IncidentImpactFieldRequest,
    IncidentImpactFieldResponse: IncidentImpactFieldResponse,
    IncidentImpactFieldsResponse: IncidentImpactFieldsResponse,
    IncidentImpactPatchAttributes: IncidentImpactPatchAttributes,
    IncidentImpactPatchData: IncidentImpactPatchData,
    IncidentImpactPatchRequest: IncidentImpactPatchRequest,
    IncidentImpactRelationships: IncidentImpactRelationships,
    IncidentImpactResponse: IncidentImpactResponse,
    IncidentImpactResponseData: IncidentImpactResponseData,
    IncidentImpactsResponse: IncidentImpactsResponse,
    IncidentImportFieldAttributesMultipleValue:
      IncidentImportFieldAttributesMultipleValue,
    IncidentImportFieldAttributesSingleValue:
      IncidentImportFieldAttributesSingleValue,
    IncidentImportRelationships: IncidentImportRelationships,
    IncidentImportRequest: IncidentImportRequest,
    IncidentImportRequestAttributes: IncidentImportRequestAttributes,
    IncidentImportRequestData: IncidentImportRequestData,
    IncidentImportResponse: IncidentImportResponse,
    IncidentImportResponseAttributes: IncidentImportResponseAttributes,
    IncidentImportResponseData: IncidentImportResponseData,
    IncidentImportResponseRelationships: IncidentImportResponseRelationships,
    IncidentIntegrationMetadataAttributes:
      IncidentIntegrationMetadataAttributes,
    IncidentIntegrationMetadataCreateData:
      IncidentIntegrationMetadataCreateData,
    IncidentIntegrationMetadataCreateRequest:
      IncidentIntegrationMetadataCreateRequest,
    IncidentIntegrationMetadataListResponse:
      IncidentIntegrationMetadataListResponse,
    IncidentIntegrationMetadataPatchData: IncidentIntegrationMetadataPatchData,
    IncidentIntegrationMetadataPatchRequest:
      IncidentIntegrationMetadataPatchRequest,
    IncidentIntegrationMetadataResponse: IncidentIntegrationMetadataResponse,
    IncidentIntegrationMetadataResponseData:
      IncidentIntegrationMetadataResponseData,
    IncidentIntegrationRelationships: IncidentIntegrationRelationships,
    IncidentNonDatadogCreator: IncidentNonDatadogCreator,
    IncidentNotificationHandle: IncidentNotificationHandle,
    IncidentNotificationRule: IncidentNotificationRule,
    IncidentNotificationRuleArray: IncidentNotificationRuleArray,
    IncidentNotificationRuleArrayMeta: IncidentNotificationRuleArrayMeta,
    IncidentNotificationRuleArrayMetaPage:
      IncidentNotificationRuleArrayMetaPage,
    IncidentNotificationRuleAttributes: IncidentNotificationRuleAttributes,
    IncidentNotificationRuleConditionsItems:
      IncidentNotificationRuleConditionsItems,
    IncidentNotificationRuleCreateAttributes:
      IncidentNotificationRuleCreateAttributes,
    IncidentNotificationRuleCreateData: IncidentNotificationRuleCreateData,
    IncidentNotificationRuleCreateDataRelationships:
      IncidentNotificationRuleCreateDataRelationships,
    IncidentNotificationRuleRelationships:
      IncidentNotificationRuleRelationships,
    IncidentNotificationRuleResponseData: IncidentNotificationRuleResponseData,
    IncidentNotificationRuleUpdateData: IncidentNotificationRuleUpdateData,
    IncidentNotificationTemplate: IncidentNotificationTemplate,
    IncidentNotificationTemplateArray: IncidentNotificationTemplateArray,
    IncidentNotificationTemplateArrayMeta:
      IncidentNotificationTemplateArrayMeta,
    IncidentNotificationTemplateArrayMetaPage:
      IncidentNotificationTemplateArrayMetaPage,
    IncidentNotificationTemplateAttributes:
      IncidentNotificationTemplateAttributes,
    IncidentNotificationTemplateCreateAttributes:
      IncidentNotificationTemplateCreateAttributes,
    IncidentNotificationTemplateCreateData:
      IncidentNotificationTemplateCreateData,
    IncidentNotificationTemplateCreateDataRelationships:
      IncidentNotificationTemplateCreateDataRelationships,
    IncidentNotificationTemplateObject: IncidentNotificationTemplateObject,
    IncidentNotificationTemplateRelationships:
      IncidentNotificationTemplateRelationships,
    IncidentNotificationTemplateResponseData:
      IncidentNotificationTemplateResponseData,
    IncidentNotificationTemplateUpdateAttributes:
      IncidentNotificationTemplateUpdateAttributes,
    IncidentNotificationTemplateUpdateData:
      IncidentNotificationTemplateUpdateData,
    IncidentOnCallPageDataAttributesRequest:
      IncidentOnCallPageDataAttributesRequest,
    IncidentOnCallPageDataRequest: IncidentOnCallPageDataRequest,
    IncidentOnCallPageLinkRequest: IncidentOnCallPageLinkRequest,
    IncidentOnCallPageTarget: IncidentOnCallPageTarget,
    IncidentOrgSettingsDataAttributesResponse:
      IncidentOrgSettingsDataAttributesResponse,
    IncidentOrgSettingsDataResponse: IncidentOrgSettingsDataResponse,
    IncidentOrgSettingsListResponse: IncidentOrgSettingsListResponse,
    IncidentOrgSettingsRelationships: IncidentOrgSettingsRelationships,
    IncidentOrgSettingsResponse: IncidentOrgSettingsResponse,
    IncidentPageRoleReference: IncidentPageRoleReference,
    IncidentPageTarget: IncidentPageTarget,
    IncidentPageUUIDDataResponse: IncidentPageUUIDDataResponse,
    IncidentPageUUIDResponse: IncidentPageUUIDResponse,
    IncidentResponderDataAttributesResponse:
      IncidentResponderDataAttributesResponse,
    IncidentResponderDataRequest: IncidentResponderDataRequest,
    IncidentResponderDataResponse: IncidentResponderDataResponse,
    IncidentResponderRelationships: IncidentResponderRelationships,
    IncidentResponderRelationshipsRequest:
      IncidentResponderRelationshipsRequest,
    IncidentResponderRequest: IncidentResponderRequest,
    IncidentResponderResponse: IncidentResponderResponse,
    IncidentResponderRoleAssignmentRelationshipData:
      IncidentResponderRoleAssignmentRelationshipData,
    IncidentResponderRoleAssignmentsRelationship:
      IncidentResponderRoleAssignmentsRelationship,
    IncidentResponderUserRelationship: IncidentResponderUserRelationship,
    IncidentResponderUserRelationshipData:
      IncidentResponderUserRelationshipData,
    IncidentRespondersPagination: IncidentRespondersPagination,
    IncidentRespondersResponse: IncidentRespondersResponse,
    IncidentRespondersResponseMeta: IncidentRespondersResponseMeta,
    IncidentRespondersResponseMetaPage: IncidentRespondersResponseMetaPage,
    IncidentResponse: IncidentResponse,
    IncidentResponseAttributes: IncidentResponseAttributes,
    IncidentResponseData: IncidentResponseData,
    IncidentResponseMeta: IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination,
    IncidentResponseRelationships: IncidentResponseRelationships,
    IncidentRoleAssignmentDataAttributesResponse:
      IncidentRoleAssignmentDataAttributesResponse,
    IncidentRoleAssignmentDataResponse: IncidentRoleAssignmentDataResponse,
    IncidentRoleAssignmentRelationshipsResponse:
      IncidentRoleAssignmentRelationshipsResponse,
    IncidentRoleAssignmentResponderRelationship:
      IncidentRoleAssignmentResponderRelationship,
    IncidentRoleAssignmentResponderRelationshipData:
      IncidentRoleAssignmentResponderRelationshipData,
    IncidentRoleAssignmentRoleRelationship:
      IncidentRoleAssignmentRoleRelationship,
    IncidentRoleAssignmentRoleRelationshipData:
      IncidentRoleAssignmentRoleRelationshipData,
    IncidentRuleCondition: IncidentRuleCondition,
    IncidentRuleDataAttributesRequest: IncidentRuleDataAttributesRequest,
    IncidentRuleDataAttributesResponse: IncidentRuleDataAttributesResponse,
    IncidentRuleDataRequest: IncidentRuleDataRequest,
    IncidentRuleDataResponse: IncidentRuleDataResponse,
    IncidentRulePatchDataAttributesRequest:
      IncidentRulePatchDataAttributesRequest,
    IncidentRulePatchDataRequest: IncidentRulePatchDataRequest,
    IncidentRulePatchRequest: IncidentRulePatchRequest,
    IncidentRuleQueryCondition: IncidentRuleQueryCondition,
    IncidentRuleRequest: IncidentRuleRequest,
    IncidentRuleResponse: IncidentRuleResponse,
    IncidentRulesResponse: IncidentRulesResponse,
    IncidentSearchResponse: IncidentSearchResponse,
    IncidentSearchResponseAttributes: IncidentSearchResponseAttributes,
    IncidentSearchResponseData: IncidentSearchResponseData,
    IncidentSearchResponseFacetsData: IncidentSearchResponseFacetsData,
    IncidentSearchResponseFieldFacetData: IncidentSearchResponseFieldFacetData,
    IncidentSearchResponseIncidentsData: IncidentSearchResponseIncidentsData,
    IncidentSearchResponseMeta: IncidentSearchResponseMeta,
    IncidentSearchResponseNumericFacetData:
      IncidentSearchResponseNumericFacetData,
    IncidentSearchResponseNumericFacetDataAggregates:
      IncidentSearchResponseNumericFacetDataAggregates,
    IncidentSearchResponsePropertyFieldFacetData:
      IncidentSearchResponsePropertyFieldFacetData,
    IncidentSearchResponseUserFacetData: IncidentSearchResponseUserFacetData,
    IncidentServiceNowRecordDataAttributesRequest:
      IncidentServiceNowRecordDataAttributesRequest,
    IncidentServiceNowRecordDataRequest: IncidentServiceNowRecordDataRequest,
    IncidentServiceNowRecordRequest: IncidentServiceNowRecordRequest,
    IncidentTimelineCellMarkdownCreateAttributes:
      IncidentTimelineCellMarkdownCreateAttributes,
    IncidentTimelineCellMarkdownCreateAttributesContent:
      IncidentTimelineCellMarkdownCreateAttributesContent,
    IncidentTimestampOverrideDataAttributesRequest:
      IncidentTimestampOverrideDataAttributesRequest,
    IncidentTimestampOverrideDataAttributesResponse:
      IncidentTimestampOverrideDataAttributesResponse,
    IncidentTimestampOverrideDataRequest: IncidentTimestampOverrideDataRequest,
    IncidentTimestampOverrideDataResponse:
      IncidentTimestampOverrideDataResponse,
    IncidentTimestampOverridePatchDataAttributesRequest:
      IncidentTimestampOverridePatchDataAttributesRequest,
    IncidentTimestampOverridePatchDataRequest:
      IncidentTimestampOverridePatchDataRequest,
    IncidentTimestampOverridePatchRequest:
      IncidentTimestampOverridePatchRequest,
    IncidentTimestampOverrideRelationships:
      IncidentTimestampOverrideRelationships,
    IncidentTimestampOverrideRequest: IncidentTimestampOverrideRequest,
    IncidentTimestampOverrideResponse: IncidentTimestampOverrideResponse,
    IncidentTimestampOverridesResponse: IncidentTimestampOverridesResponse,
    IncidentTodoAnonymousAssignee: IncidentTodoAnonymousAssignee,
    IncidentTodoAttributes: IncidentTodoAttributes,
    IncidentTodoCreateData: IncidentTodoCreateData,
    IncidentTodoCreateRequest: IncidentTodoCreateRequest,
    IncidentTodoListResponse: IncidentTodoListResponse,
    IncidentTodoPatchData: IncidentTodoPatchData,
    IncidentTodoPatchRequest: IncidentTodoPatchRequest,
    IncidentTodoRelationships: IncidentTodoRelationships,
    IncidentTodoResponse: IncidentTodoResponse,
    IncidentTodoResponseData: IncidentTodoResponseData,
    IncidentTypeAttributes: IncidentTypeAttributes,
    IncidentTypeConfiguration: IncidentTypeConfiguration,
    IncidentTypeCreateData: IncidentTypeCreateData,
    IncidentTypeCreateRequest: IncidentTypeCreateRequest,
    IncidentTypeListResponse: IncidentTypeListResponse,
    IncidentTypeObject: IncidentTypeObject,
    IncidentTypePatchData: IncidentTypePatchData,
    IncidentTypePatchRequest: IncidentTypePatchRequest,
    IncidentTypeRelationships: IncidentTypeRelationships,
    IncidentTypeResponse: IncidentTypeResponse,
    IncidentTypeUpdateAttributes: IncidentTypeUpdateAttributes,
    IncidentUpdateAttributes: IncidentUpdateAttributes,
    IncidentUpdateData: IncidentUpdateData,
    IncidentUpdateRelationships: IncidentUpdateRelationships,
    IncidentUpdateRequest: IncidentUpdateRequest,
    IncidentUserAttributes: IncidentUserAttributes,
    IncidentUserData: IncidentUserData,
    IncidentUserDefinedFieldAttributesCreateRequest:
      IncidentUserDefinedFieldAttributesCreateRequest,
    IncidentUserDefinedFieldAttributesResponse:
      IncidentUserDefinedFieldAttributesResponse,
    IncidentUserDefinedFieldAttributesUpdateRequest:
      IncidentUserDefinedFieldAttributesUpdateRequest,
    IncidentUserDefinedFieldCreateData: IncidentUserDefinedFieldCreateData,
    IncidentUserDefinedFieldCreateRelationships:
      IncidentUserDefinedFieldCreateRelationships,
    IncidentUserDefinedFieldCreateRequest:
      IncidentUserDefinedFieldCreateRequest,
    IncidentUserDefinedFieldListMeta: IncidentUserDefinedFieldListMeta,
    IncidentUserDefinedFieldListResponse: IncidentUserDefinedFieldListResponse,
    IncidentUserDefinedFieldMetadata: IncidentUserDefinedFieldMetadata,
    IncidentUserDefinedFieldRelationships:
      IncidentUserDefinedFieldRelationships,
    IncidentUserDefinedFieldResponse: IncidentUserDefinedFieldResponse,
    IncidentUserDefinedFieldResponseData: IncidentUserDefinedFieldResponseData,
    IncidentUserDefinedFieldUpdateData: IncidentUserDefinedFieldUpdateData,
    IncidentUserDefinedFieldUpdateRequest:
      IncidentUserDefinedFieldUpdateRequest,
    IncidentUserDefinedFieldValidValue: IncidentUserDefinedFieldValidValue,
    IncidentUserDefinedRoleDataAttributesRequest:
      IncidentUserDefinedRoleDataAttributesRequest,
    IncidentUserDefinedRoleDataAttributesResponse:
      IncidentUserDefinedRoleDataAttributesResponse,
    IncidentUserDefinedRoleDataRequest: IncidentUserDefinedRoleDataRequest,
    IncidentUserDefinedRoleDataResponse: IncidentUserDefinedRoleDataResponse,
    IncidentUserDefinedRoleIncidentTypeRelationship:
      IncidentUserDefinedRoleIncidentTypeRelationship,
    IncidentUserDefinedRoleIncidentTypeRelationshipData:
      IncidentUserDefinedRoleIncidentTypeRelationshipData,
    IncidentUserDefinedRolePatchDataAttributesRequest:
      IncidentUserDefinedRolePatchDataAttributesRequest,
    IncidentUserDefinedRolePatchDataRequest:
      IncidentUserDefinedRolePatchDataRequest,
    IncidentUserDefinedRolePatchRequest: IncidentUserDefinedRolePatchRequest,
    IncidentUserDefinedRolePolicy: IncidentUserDefinedRolePolicy,
    IncidentUserDefinedRoleRelationshipsRequest:
      IncidentUserDefinedRoleRelationshipsRequest,
    IncidentUserDefinedRoleRelationshipsResponse:
      IncidentUserDefinedRoleRelationshipsResponse,
    IncidentUserDefinedRoleRequest: IncidentUserDefinedRoleRequest,
    IncidentUserDefinedRoleResponse: IncidentUserDefinedRoleResponse,
    IncidentUserDefinedRolesResponse: IncidentUserDefinedRolesResponse,
    IncidentsResponse: IncidentsResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    JiraIntegrationMetadata: JiraIntegrationMetadata,
    JiraIntegrationMetadataIssuesItem: JiraIntegrationMetadataIssuesItem,
    Layer: Layer,
    LayerAttributes: LayerAttributes,
    LayerAttributesInterval: LayerAttributesInterval,
    LayerRelationships: LayerRelationships,
    LayerRelationshipsMembers: LayerRelationshipsMembers,
    LayerRelationshipsMembersDataItems: LayerRelationshipsMembersDataItems,
    ListNotificationChannelsResponse: ListNotificationChannelsResponse,
    ListOnCallNotificationRulesResponse: ListOnCallNotificationRulesResponse,
    MSTeamsIntegrationMetadata: MSTeamsIntegrationMetadata,
    MSTeamsIntegrationMetadataTeamsItem: MSTeamsIntegrationMetadataTeamsItem,
    MicrosoftTeamsConfigurationReference: MicrosoftTeamsConfigurationReference,
    MicrosoftTeamsConfigurationReferenceData:
      MicrosoftTeamsConfigurationReferenceData,
    NotificationChannel: NotificationChannel,
    NotificationChannelAttributes: NotificationChannelAttributes,
    NotificationChannelData: NotificationChannelData,
    NotificationChannelEmailConfig: NotificationChannelEmailConfig,
    NotificationChannelPhoneConfig: NotificationChannelPhoneConfig,
    NotificationChannelPushConfig: NotificationChannelPushConfig,
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
    OnCallNotificationRule: OnCallNotificationRule,
    OnCallNotificationRuleAttributes: OnCallNotificationRuleAttributes,
    OnCallNotificationRuleChannelRelationship:
      OnCallNotificationRuleChannelRelationship,
    OnCallNotificationRuleChannelRelationshipData:
      OnCallNotificationRuleChannelRelationshipData,
    OnCallNotificationRuleData: OnCallNotificationRuleData,
    OnCallNotificationRuleRelationships: OnCallNotificationRuleRelationships,
    OnCallNotificationRuleRequestAttributes:
      OnCallNotificationRuleRequestAttributes,
    OnCallPageAuthorRelationship: OnCallPageAuthorRelationship,
    OnCallPageAuthorRelationshipData: OnCallPageAuthorRelationshipData,
    OnCallPageData: OnCallPageData,
    OnCallPageDataAttributes: OnCallPageDataAttributes,
    OnCallPageDataRelationships: OnCallPageDataRelationships,
    OnCallPageJiraIssueRelationship: OnCallPageJiraIssueRelationship,
    OnCallPageJiraIssueRelationshipData: OnCallPageJiraIssueRelationshipData,
    OnCallPageLink: OnCallPageLink,
    OnCallPageLinkAttributes: OnCallPageLinkAttributes,
    OnCallPageLinkRelationshipData: OnCallPageLinkRelationshipData,
    OnCallPageLinksRelationship: OnCallPageLinksRelationship,
    OnCallPageLiveCall: OnCallPageLiveCall,
    OnCallPageLiveCallOver: OnCallPageLiveCallOver,
    OnCallPageRespondersRelationship: OnCallPageRespondersRelationship,
    OnCallPageResponse: OnCallPageResponse,
    OnCallPageScheduledAction: OnCallPageScheduledAction,
    OnCallPageScheduledActionAttributes: OnCallPageScheduledActionAttributes,
    OnCallPageScheduledActionRelationship:
      OnCallPageScheduledActionRelationship,
    OnCallPageScheduledActionRelationshipData:
      OnCallPageScheduledActionRelationshipData,
    OnCallPageScheduledActionRelationships:
      OnCallPageScheduledActionRelationships,
    OnCallPageScheduledActionRelationshipsSchedules:
      OnCallPageScheduledActionRelationshipsSchedules,
    OnCallPageScheduledActionRelationshipsSchedulesData:
      OnCallPageScheduledActionRelationshipsSchedulesData,
    OnCallPageScheduledActionRelationshipsUsers:
      OnCallPageScheduledActionRelationshipsUsers,
    OnCallPageServiceNowIncidentRelationship:
      OnCallPageServiceNowIncidentRelationship,
    OnCallPageServiceNowIncidentRelationshipData:
      OnCallPageServiceNowIncidentRelationshipData,
    OnCallPageTargetRelationship: OnCallPageTargetRelationship,
    OnCallPageTargetRelationshipData: OnCallPageTargetRelationshipData,
    OnCallPageTeamRoutingRuleRelationship:
      OnCallPageTeamRoutingRuleRelationship,
    OnCallPageTeamRoutingRuleRelationshipData:
      OnCallPageTeamRoutingRuleRelationshipData,
    OnCallPageUserRelationshipData: OnCallPageUserRelationshipData,
    OnCallPagesResponse: OnCallPagesResponse,
    OnCallPhoneNotificationRuleSettings: OnCallPhoneNotificationRuleSettings,
    OverrideAttributes: OverrideAttributes,
    OverrideCreateResponse: OverrideCreateResponse,
    OverrideData: OverrideData,
    OverrideRelationships: OverrideRelationships,
    OverrideRelationshipsSchedule: OverrideRelationshipsSchedule,
    OverrideRelationshipsScheduleData: OverrideRelationshipsScheduleData,
    OverrideRelationshipsUser: OverrideRelationshipsUser,
    OverrideRelationshipsUserData: OverrideRelationshipsUserData,
    Overrides: Overrides,
    PatchAttachmentRequest: PatchAttachmentRequest,
    PatchAttachmentRequestData: PatchAttachmentRequestData,
    PatchAttachmentRequestDataAttributes: PatchAttachmentRequestDataAttributes,
    PatchAttachmentRequestDataAttributesAttachment:
      PatchAttachmentRequestDataAttributesAttachment,
    PatchIncidentNotificationTemplateRequest:
      PatchIncidentNotificationTemplateRequest,
    PostmortemAttachmentRequest: PostmortemAttachmentRequest,
    PostmortemAttachmentRequestAttributes:
      PostmortemAttachmentRequestAttributes,
    PostmortemAttachmentRequestData: PostmortemAttachmentRequestData,
    PostmortemCell: PostmortemCell,
    PostmortemCellAttributes: PostmortemCellAttributes,
    PostmortemCellDefinition: PostmortemCellDefinition,
    PostmortemTemplateAttributesRequest: PostmortemTemplateAttributesRequest,
    PostmortemTemplateAttributesResponse: PostmortemTemplateAttributesResponse,
    PostmortemTemplateCreateRelationships:
      PostmortemTemplateCreateRelationships,
    PostmortemTemplateDataRequest: PostmortemTemplateDataRequest,
    PostmortemTemplateDataResponse: PostmortemTemplateDataResponse,
    PostmortemTemplateIncidentTypeRelationship:
      PostmortemTemplateIncidentTypeRelationship,
    PostmortemTemplateIncidentTypeRelationshipData:
      PostmortemTemplateIncidentTypeRelationshipData,
    PostmortemTemplateRequest: PostmortemTemplateRequest,
    PostmortemTemplateResponse: PostmortemTemplateResponse,
    PostmortemTemplateResponseRelationships:
      PostmortemTemplateResponseRelationships,
    PostmortemTemplateUserRelationship: PostmortemTemplateUserRelationship,
    PostmortemTemplateUserRelationshipData:
      PostmortemTemplateUserRelationshipData,
    PostmortemTemplatesResponse: PostmortemTemplatesResponse,
    PutIncidentNotificationRuleRequest: PutIncidentNotificationRuleRequest,
    RelationshipToIncident: RelationshipToIncident,
    RelationshipToIncidentAttachment: RelationshipToIncidentAttachment,
    RelationshipToIncidentAttachmentData: RelationshipToIncidentAttachmentData,
    RelationshipToIncidentData: RelationshipToIncidentData,
    RelationshipToIncidentImpactData: RelationshipToIncidentImpactData,
    RelationshipToIncidentImpacts: RelationshipToIncidentImpacts,
    RelationshipToIncidentIntegrationMetadataData:
      RelationshipToIncidentIntegrationMetadataData,
    RelationshipToIncidentIntegrationMetadatas:
      RelationshipToIncidentIntegrationMetadatas,
    RelationshipToIncidentNotificationTemplate:
      RelationshipToIncidentNotificationTemplate,
    RelationshipToIncidentNotificationTemplateData:
      RelationshipToIncidentNotificationTemplateData,
    RelationshipToIncidentPostmortem: RelationshipToIncidentPostmortem,
    RelationshipToIncidentPostmortemData: RelationshipToIncidentPostmortemData,
    RelationshipToIncidentResponderData: RelationshipToIncidentResponderData,
    RelationshipToIncidentResponders: RelationshipToIncidentResponders,
    RelationshipToIncidentType: RelationshipToIncidentType,
    RelationshipToIncidentTypeData: RelationshipToIncidentTypeData,
    RelationshipToIncidentUserDefinedFieldData:
      RelationshipToIncidentUserDefinedFieldData,
    RelationshipToIncidentUserDefinedFields:
      RelationshipToIncidentUserDefinedFields,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    RerouteOnCallPageRequest: RerouteOnCallPageRequest,
    RerouteOnCallPageRequestData: RerouteOnCallPageRequestData,
    RerouteOnCallPageRequestDataAttributes:
      RerouteOnCallPageRequestDataAttributes,
    RoutingRule: RoutingRule,
    RoutingRuleAttributes: RoutingRuleAttributes,
    RoutingRuleEscalationPolicyAction: RoutingRuleEscalationPolicyAction,
    RoutingRuleEscalationPolicyActionSupportHours:
      RoutingRuleEscalationPolicyActionSupportHours,
    RoutingRuleRelationships: RoutingRuleRelationships,
    RoutingRuleRelationshipsPolicy: RoutingRuleRelationshipsPolicy,
    RoutingRuleRelationshipsPolicyData: RoutingRuleRelationshipsPolicyData,
    RoutingRuleRerouteToTeamAction: RoutingRuleRerouteToTeamAction,
    Schedule: Schedule,
    ScheduleCreateRequest: ScheduleCreateRequest,
    ScheduleCreateRequestData: ScheduleCreateRequestData,
    ScheduleCreateRequestDataAttributes: ScheduleCreateRequestDataAttributes,
    ScheduleCreateRequestDataAttributesLayersItems:
      ScheduleCreateRequestDataAttributesLayersItems,
    ScheduleCreateRequestDataRelationships:
      ScheduleCreateRequestDataRelationships,
    ScheduleData: ScheduleData,
    ScheduleDataAttributes: ScheduleDataAttributes,
    ScheduleDataRelationships: ScheduleDataRelationships,
    ScheduleDataRelationshipsLayers: ScheduleDataRelationshipsLayers,
    ScheduleDataRelationshipsLayersDataItems:
      ScheduleDataRelationshipsLayersDataItems,
    ScheduleListItem: ScheduleListItem,
    ScheduleListItemRelationships: ScheduleListItemRelationships,
    ScheduleMember: ScheduleMember,
    ScheduleMemberRelationships: ScheduleMemberRelationships,
    ScheduleMemberRelationshipsUser: ScheduleMemberRelationshipsUser,
    ScheduleMemberRelationshipsUserData: ScheduleMemberRelationshipsUserData,
    ScheduleOnCallResponderData: ScheduleOnCallResponderData,
    ScheduleOnCallResponderDataAttributes:
      ScheduleOnCallResponderDataAttributes,
    ScheduleOnCallResponderDataRelationships:
      ScheduleOnCallResponderDataRelationships,
    ScheduleOnCallResponderDataRelationshipsShifts:
      ScheduleOnCallResponderDataRelationshipsShifts,
    ScheduleOnCallResponderDataRelationshipsShiftsDataItems:
      ScheduleOnCallResponderDataRelationshipsShiftsDataItems,
    ScheduleOnCallResponders: ScheduleOnCallResponders,
    ScheduleOnCallRespondersData: ScheduleOnCallRespondersData,
    ScheduleOnCallRespondersDataAttributes:
      ScheduleOnCallRespondersDataAttributes,
    ScheduleOnCallRespondersDataRelationships:
      ScheduleOnCallRespondersDataRelationships,
    ScheduleOnCallRespondersDataRelationshipsResponders:
      ScheduleOnCallRespondersDataRelationshipsResponders,
    ScheduleOnCallRespondersDataRelationshipsRespondersDataItems:
      ScheduleOnCallRespondersDataRelationshipsRespondersDataItems,
    ScheduleOnCallRespondersDataRelationshipsSchedule:
      ScheduleOnCallRespondersDataRelationshipsSchedule,
    ScheduleOnCallRespondersDataRelationshipsScheduleData:
      ScheduleOnCallRespondersDataRelationshipsScheduleData,
    ScheduleRequestDataAttributesLayersItemsMembersItems:
      ScheduleRequestDataAttributesLayersItemsMembersItems,
    ScheduleRequestDataAttributesLayersItemsMembersItemsUser:
      ScheduleRequestDataAttributesLayersItemsMembersItemsUser,
    ScheduleTarget: ScheduleTarget,
    ScheduleUpdateRequest: ScheduleUpdateRequest,
    ScheduleUpdateRequestData: ScheduleUpdateRequestData,
    ScheduleUpdateRequestDataAttributes: ScheduleUpdateRequestDataAttributes,
    ScheduleUpdateRequestDataAttributesLayersItems:
      ScheduleUpdateRequestDataAttributesLayersItems,
    ScheduleUpdateRequestDataRelationships:
      ScheduleUpdateRequestDataRelationships,
    ScheduleUser: ScheduleUser,
    ScheduleUserAttributes: ScheduleUserAttributes,
    Schedules: Schedules,
    SchedulesResponseMeta: SchedulesResponseMeta,
    SchedulesResponseMetaPage: SchedulesResponseMetaPage,
    SendSlackMessageAction: SendSlackMessageAction,
    SendTeamsMessageAction: SendTeamsMessageAction,
    Shift: Shift,
    ShiftData: ShiftData,
    ShiftDataAttributes: ShiftDataAttributes,
    ShiftDataRelationships: ShiftDataRelationships,
    ShiftDataRelationshipsUser: ShiftDataRelationshipsUser,
    ShiftDataRelationshipsUserData: ShiftDataRelationshipsUserData,
    SlackIntegrationMetadata: SlackIntegrationMetadata,
    SlackIntegrationMetadataChannelItem: SlackIntegrationMetadataChannelItem,
    TeamOnCallResponders: TeamOnCallResponders,
    TeamOnCallRespondersData: TeamOnCallRespondersData,
    TeamOnCallRespondersDataRelationships:
      TeamOnCallRespondersDataRelationships,
    TeamOnCallRespondersDataRelationshipsEscalations:
      TeamOnCallRespondersDataRelationshipsEscalations,
    TeamOnCallRespondersDataRelationshipsEscalationsDataItems:
      TeamOnCallRespondersDataRelationshipsEscalationsDataItems,
    TeamOnCallRespondersDataRelationshipsResponders:
      TeamOnCallRespondersDataRelationshipsResponders,
    TeamOnCallRespondersDataRelationshipsRespondersDataItems:
      TeamOnCallRespondersDataRelationshipsRespondersDataItems,
    TeamReference: TeamReference,
    TeamReferenceAttributes: TeamReferenceAttributes,
    TeamRoutingRules: TeamRoutingRules,
    TeamRoutingRulesData: TeamRoutingRulesData,
    TeamRoutingRulesDataRelationships: TeamRoutingRulesDataRelationships,
    TeamRoutingRulesDataRelationshipsRules:
      TeamRoutingRulesDataRelationshipsRules,
    TeamRoutingRulesDataRelationshipsRulesDataItems:
      TeamRoutingRulesDataRelationshipsRulesDataItems,
    TeamRoutingRulesRequest: TeamRoutingRulesRequest,
    TeamRoutingRulesRequestData: TeamRoutingRulesRequestData,
    TeamRoutingRulesRequestDataAttributes:
      TeamRoutingRulesRequestDataAttributes,
    TeamRoutingRulesRequestRule: TeamRoutingRulesRequestRule,
    TeamTarget: TeamTarget,
    TimeRestriction: TimeRestriction,
    TimeRestrictions: TimeRestrictions,
    TriggerWorkflowAutomationAction: TriggerWorkflowAutomationAction,
    UpdateOnCallNotificationRuleRequest: UpdateOnCallNotificationRuleRequest,
    UpdateOnCallNotificationRuleRequestAttributes:
      UpdateOnCallNotificationRuleRequestAttributes,
    UpdateOnCallNotificationRuleRequestData:
      UpdateOnCallNotificationRuleRequestData,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
    UserTarget: UserTarget,
    ZoomConfigurationReference: ZoomConfigurationReference,
    ZoomConfigurationReferenceData: ZoomConfigurationReferenceData,
  },
};
