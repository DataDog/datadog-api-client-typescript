import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Attachment } from "./Attachment";
import { AttachmentArray } from "./AttachmentArray";
import { AttachmentData } from "./AttachmentData";
import { AttachmentDataAttributes } from "./AttachmentDataAttributes";
import { AttachmentDataAttributesAttachment } from "./AttachmentDataAttributesAttachment";
import { AttachmentDataRelationships } from "./AttachmentDataRelationships";
import { CreateAttachmentRequest } from "./CreateAttachmentRequest";
import { CreateAttachmentRequestData } from "./CreateAttachmentRequestData";
import { CreateAttachmentRequestDataAttributes } from "./CreateAttachmentRequestDataAttributes";
import { CreateAttachmentRequestDataAttributesAttachment } from "./CreateAttachmentRequestDataAttributesAttachment";
import { CreateIncidentNotificationRuleRequest } from "./CreateIncidentNotificationRuleRequest";
import { CreateIncidentNotificationTemplateRequest } from "./CreateIncidentNotificationTemplateRequest";
import { GlobalIncidentSettingsAttributesRequest } from "./GlobalIncidentSettingsAttributesRequest";
import { GlobalIncidentSettingsAttributesResponse } from "./GlobalIncidentSettingsAttributesResponse";
import { GlobalIncidentSettingsDataRequest } from "./GlobalIncidentSettingsDataRequest";
import { GlobalIncidentSettingsDataResponse } from "./GlobalIncidentSettingsDataResponse";
import { GlobalIncidentSettingsRequest } from "./GlobalIncidentSettingsRequest";
import { GlobalIncidentSettingsResponse } from "./GlobalIncidentSettingsResponse";
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
import { IncidentRespondersResponse } from "./IncidentRespondersResponse";
import { IncidentResponse } from "./IncidentResponse";
import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
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
import { MSTeamsIntegrationMetadata } from "./MSTeamsIntegrationMetadata";
import { MSTeamsIntegrationMetadataTeamsItem } from "./MSTeamsIntegrationMetadataTeamsItem";
import { MicrosoftTeamsConfigurationReference } from "./MicrosoftTeamsConfigurationReference";
import { MicrosoftTeamsConfigurationReferenceData } from "./MicrosoftTeamsConfigurationReferenceData";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
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
import { PostmortemTemplateDataRequest } from "./PostmortemTemplateDataRequest";
import { PostmortemTemplateDataResponse } from "./PostmortemTemplateDataResponse";
import { PostmortemTemplateRequest } from "./PostmortemTemplateRequest";
import { PostmortemTemplateResponse } from "./PostmortemTemplateResponse";
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
import { SlackIntegrationMetadata } from "./SlackIntegrationMetadata";
import { SlackIntegrationMetadataChannelItem } from "./SlackIntegrationMetadataChannelItem";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { ZoomConfigurationReference } from "./ZoomConfigurationReference";
import { ZoomConfigurationReferenceData } from "./ZoomConfigurationReferenceData";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AttachmentDataAttributesAttachmentType: ["postmortem", "link"],
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
    IncidentResponderType: ["incident_responders"],
    IncidentRespondersType: ["incident_responders"],
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
    IncidentTimestampType: ["created", "detected", "resolved", "declared"],
    IncidentTodoAnonymousAssigneeSource: ["slack", "microsoft_teams"],
    IncidentTodoType: ["incident_todos"],
    IncidentType: ["incidents"],
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
    OrganizationsType: ["orgs"],
    PostmortemCellType: ["markdown"],
    PostmortemTemplateType: ["postmortem_template"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    AttachmentIncluded: ["IncidentUserData"],
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
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Attachment: Attachment,
    AttachmentArray: AttachmentArray,
    AttachmentData: AttachmentData,
    AttachmentDataAttributes: AttachmentDataAttributes,
    AttachmentDataAttributesAttachment: AttachmentDataAttributesAttachment,
    AttachmentDataRelationships: AttachmentDataRelationships,
    CreateAttachmentRequest: CreateAttachmentRequest,
    CreateAttachmentRequestData: CreateAttachmentRequestData,
    CreateAttachmentRequestDataAttributes:
      CreateAttachmentRequestDataAttributes,
    CreateAttachmentRequestDataAttributesAttachment:
      CreateAttachmentRequestDataAttributesAttachment,
    CreateIncidentNotificationRuleRequest:
      CreateIncidentNotificationRuleRequest,
    CreateIncidentNotificationTemplateRequest:
      CreateIncidentNotificationTemplateRequest,
    GlobalIncidentSettingsAttributesRequest:
      GlobalIncidentSettingsAttributesRequest,
    GlobalIncidentSettingsAttributesResponse:
      GlobalIncidentSettingsAttributesResponse,
    GlobalIncidentSettingsDataRequest: GlobalIncidentSettingsDataRequest,
    GlobalIncidentSettingsDataResponse: GlobalIncidentSettingsDataResponse,
    GlobalIncidentSettingsRequest: GlobalIncidentSettingsRequest,
    GlobalIncidentSettingsResponse: GlobalIncidentSettingsResponse,
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
    IncidentRespondersResponse: IncidentRespondersResponse,
    IncidentResponse: IncidentResponse,
    IncidentResponseAttributes: IncidentResponseAttributes,
    IncidentResponseData: IncidentResponseData,
    IncidentResponseMeta: IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination,
    IncidentResponseRelationships: IncidentResponseRelationships,
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
    MSTeamsIntegrationMetadata: MSTeamsIntegrationMetadata,
    MSTeamsIntegrationMetadataTeamsItem: MSTeamsIntegrationMetadataTeamsItem,
    MicrosoftTeamsConfigurationReference: MicrosoftTeamsConfigurationReference,
    MicrosoftTeamsConfigurationReferenceData:
      MicrosoftTeamsConfigurationReferenceData,
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
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
    PostmortemTemplateDataRequest: PostmortemTemplateDataRequest,
    PostmortemTemplateDataResponse: PostmortemTemplateDataResponse,
    PostmortemTemplateRequest: PostmortemTemplateRequest,
    PostmortemTemplateResponse: PostmortemTemplateResponse,
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
    SlackIntegrationMetadata: SlackIntegrationMetadata,
    SlackIntegrationMetadataChannelItem: SlackIntegrationMetadataChannelItem,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
    ZoomConfigurationReference: ZoomConfigurationReference,
    ZoomConfigurationReferenceData: ZoomConfigurationReferenceData,
  },
};
