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
import { IncidentAutomationDataAttributesRequest } from "./IncidentAutomationDataAttributesRequest";
import { IncidentAutomationDataAttributesResponse } from "./IncidentAutomationDataAttributesResponse";
import { IncidentAutomationDataDataRequest } from "./IncidentAutomationDataDataRequest";
import { IncidentAutomationDataDataResponse } from "./IncidentAutomationDataDataResponse";
import { IncidentAutomationDataRequest } from "./IncidentAutomationDataRequest";
import { IncidentAutomationDataResponse } from "./IncidentAutomationDataResponse";
import { IncidentBatchCreateRuleExecutionStatesData } from "./IncidentBatchCreateRuleExecutionStatesData";
import { IncidentBatchCreateRuleExecutionStatesDataAttributes } from "./IncidentBatchCreateRuleExecutionStatesDataAttributes";
import { IncidentBatchCreateRuleExecutionStatesRequest } from "./IncidentBatchCreateRuleExecutionStatesRequest";
import { IncidentBatchUpdateRuleExecutionStatesData } from "./IncidentBatchUpdateRuleExecutionStatesData";
import { IncidentBatchUpdateRuleExecutionStatesDataAttributes } from "./IncidentBatchUpdateRuleExecutionStatesDataAttributes";
import { IncidentBatchUpdateRuleExecutionStatesRequest } from "./IncidentBatchUpdateRuleExecutionStatesRequest";
import { IncidentCaseLinkData } from "./IncidentCaseLinkData";
import { IncidentCaseLinkDataAttributes } from "./IncidentCaseLinkDataAttributes";
import { IncidentCaseLinkResponse } from "./IncidentCaseLinkResponse";
import { IncidentCommunicationContent } from "./IncidentCommunicationContent";
import { IncidentCommunicationContentHandle } from "./IncidentCommunicationContentHandle";
import { IncidentCommunicationDataAttributesRequest } from "./IncidentCommunicationDataAttributesRequest";
import { IncidentCommunicationDataAttributesResponse } from "./IncidentCommunicationDataAttributesResponse";
import { IncidentCommunicationDataRequest } from "./IncidentCommunicationDataRequest";
import { IncidentCommunicationDataResponse } from "./IncidentCommunicationDataResponse";
import { IncidentCommunicationRequest } from "./IncidentCommunicationRequest";
import { IncidentCommunicationResponse } from "./IncidentCommunicationResponse";
import { IncidentCommunicationsResponse } from "./IncidentCommunicationsResponse";
import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateData } from "./IncidentCreateData";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentCreateRequest } from "./IncidentCreateRequest";
import { IncidentCreateZoomMeetingData } from "./IncidentCreateZoomMeetingData";
import { IncidentCreateZoomMeetingDataAttributes } from "./IncidentCreateZoomMeetingDataAttributes";
import { IncidentCreateZoomMeetingRequest } from "./IncidentCreateZoomMeetingRequest";
import { IncidentFieldAttributesMultipleValue } from "./IncidentFieldAttributesMultipleValue";
import { IncidentFieldAttributesSingleValue } from "./IncidentFieldAttributesSingleValue";
import { IncidentGoogleMeetIntegrationDataAttributes } from "./IncidentGoogleMeetIntegrationDataAttributes";
import { IncidentGoogleMeetIntegrationDataResponse } from "./IncidentGoogleMeetIntegrationDataResponse";
import { IncidentGoogleMeetIntegrationResponse } from "./IncidentGoogleMeetIntegrationResponse";
import { IncidentGoogleMeetSpace } from "./IncidentGoogleMeetSpace";
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
import { IncidentJiraIssueDataAttributesRequest } from "./IncidentJiraIssueDataAttributesRequest";
import { IncidentJiraIssueDataRequest } from "./IncidentJiraIssueDataRequest";
import { IncidentJiraIssueIntegrationDataAttributes } from "./IncidentJiraIssueIntegrationDataAttributes";
import { IncidentJiraIssueIntegrationDataResponse } from "./IncidentJiraIssueIntegrationDataResponse";
import { IncidentJiraIssueIntegrationResponse } from "./IncidentJiraIssueIntegrationResponse";
import { IncidentJiraIssueRequest } from "./IncidentJiraIssueRequest";
import { IncidentJiraTemplateDataAttributesRequest } from "./IncidentJiraTemplateDataAttributesRequest";
import { IncidentJiraTemplateDataAttributesResponse } from "./IncidentJiraTemplateDataAttributesResponse";
import { IncidentJiraTemplateDataRequest } from "./IncidentJiraTemplateDataRequest";
import { IncidentJiraTemplateDataResponse } from "./IncidentJiraTemplateDataResponse";
import { IncidentJiraTemplateFieldConfiguration } from "./IncidentJiraTemplateFieldConfiguration";
import { IncidentJiraTemplateIncidentTypeRelationship } from "./IncidentJiraTemplateIncidentTypeRelationship";
import { IncidentJiraTemplateIncidentTypeRelationshipData } from "./IncidentJiraTemplateIncidentTypeRelationshipData";
import { IncidentJiraTemplateRelationships } from "./IncidentJiraTemplateRelationships";
import { IncidentJiraTemplateRequest } from "./IncidentJiraTemplateRequest";
import { IncidentJiraTemplateResponse } from "./IncidentJiraTemplateResponse";
import { IncidentJiraTemplatesResponse } from "./IncidentJiraTemplatesResponse";
import { IncidentMSTeamsChannel } from "./IncidentMSTeamsChannel";
import { IncidentMSTeamsIntegrationDataAttributes } from "./IncidentMSTeamsIntegrationDataAttributes";
import { IncidentMSTeamsIntegrationDataResponse } from "./IncidentMSTeamsIntegrationDataResponse";
import { IncidentMSTeamsIntegrationResponse } from "./IncidentMSTeamsIntegrationResponse";
import { IncidentMicrosoftTeamsConfigurationDataAttributesRequest } from "./IncidentMicrosoftTeamsConfigurationDataAttributesRequest";
import { IncidentMicrosoftTeamsConfigurationDataAttributesResponse } from "./IncidentMicrosoftTeamsConfigurationDataAttributesResponse";
import { IncidentMicrosoftTeamsConfigurationDataRequest } from "./IncidentMicrosoftTeamsConfigurationDataRequest";
import { IncidentMicrosoftTeamsConfigurationDataResponse } from "./IncidentMicrosoftTeamsConfigurationDataResponse";
import { IncidentMicrosoftTeamsConfigurationRequest } from "./IncidentMicrosoftTeamsConfigurationRequest";
import { IncidentMicrosoftTeamsConfigurationResponse } from "./IncidentMicrosoftTeamsConfigurationResponse";
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
import { IncidentPagerdutyIncidentDataResponse } from "./IncidentPagerdutyIncidentDataResponse";
import { IncidentPagerdutyRelatedIncidentsResponse } from "./IncidentPagerdutyRelatedIncidentsResponse";
import { IncidentPagerdutyServiceData } from "./IncidentPagerdutyServiceData";
import { IncidentPagerdutyServiceDataAttributes } from "./IncidentPagerdutyServiceDataAttributes";
import { IncidentPagerdutyServicesResponse } from "./IncidentPagerdutyServicesResponse";
import { IncidentRenderTemplateDataAttributesRequest } from "./IncidentRenderTemplateDataAttributesRequest";
import { IncidentRenderTemplateDataRequest } from "./IncidentRenderTemplateDataRequest";
import { IncidentRenderTemplateRequest } from "./IncidentRenderTemplateRequest";
import { IncidentRenderedTemplateData } from "./IncidentRenderedTemplateData";
import { IncidentRenderedTemplateDataAttributes } from "./IncidentRenderedTemplateDataAttributes";
import { IncidentRenderedTemplateResponse } from "./IncidentRenderedTemplateResponse";
import { IncidentReservedRoleDataAttributesResponse } from "./IncidentReservedRoleDataAttributesResponse";
import { IncidentReservedRoleDataResponse } from "./IncidentReservedRoleDataResponse";
import { IncidentReservedRolePolicy } from "./IncidentReservedRolePolicy";
import { IncidentReservedRoleResponse } from "./IncidentReservedRoleResponse";
import { IncidentReservedRolesResponse } from "./IncidentReservedRolesResponse";
import { IncidentResponse } from "./IncidentResponse";
import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
import { IncidentRoleAssignmentDataAttributesRequest } from "./IncidentRoleAssignmentDataAttributesRequest";
import { IncidentRoleAssignmentDataAttributesResponse } from "./IncidentRoleAssignmentDataAttributesResponse";
import { IncidentRoleAssignmentDataRequest } from "./IncidentRoleAssignmentDataRequest";
import { IncidentRoleAssignmentDataResponse } from "./IncidentRoleAssignmentDataResponse";
import { IncidentRoleAssignmentRelationshipsRequest } from "./IncidentRoleAssignmentRelationshipsRequest";
import { IncidentRoleAssignmentRelationshipsResponse } from "./IncidentRoleAssignmentRelationshipsResponse";
import { IncidentRoleAssignmentRequest } from "./IncidentRoleAssignmentRequest";
import { IncidentRoleAssignmentResponderRelationship } from "./IncidentRoleAssignmentResponderRelationship";
import { IncidentRoleAssignmentResponderRelationshipData } from "./IncidentRoleAssignmentResponderRelationshipData";
import { IncidentRoleAssignmentResponse } from "./IncidentRoleAssignmentResponse";
import { IncidentRoleAssignmentRoleRelationship } from "./IncidentRoleAssignmentRoleRelationship";
import { IncidentRoleAssignmentRoleRelationshipData } from "./IncidentRoleAssignmentRoleRelationshipData";
import { IncidentRuleExecutionStateDataAttributesResponse } from "./IncidentRuleExecutionStateDataAttributesResponse";
import { IncidentRuleExecutionStateDataResponse } from "./IncidentRuleExecutionStateDataResponse";
import { IncidentRuleExecutionStateRule } from "./IncidentRuleExecutionStateRule";
import { IncidentRuleExecutionStatesResponse } from "./IncidentRuleExecutionStatesResponse";
import { IncidentSearchIncidentsExportRequest } from "./IncidentSearchIncidentsExportRequest";
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
import { IncidentStatusPageNoticeCreateData } from "./IncidentStatusPageNoticeCreateData";
import { IncidentStatusPageNoticeCreateDataAttributes } from "./IncidentStatusPageNoticeCreateDataAttributes";
import { IncidentStatusPageNoticeCreateRequest } from "./IncidentStatusPageNoticeCreateRequest";
import { IncidentStatusPageNoticeIntegrationDataAttributes } from "./IncidentStatusPageNoticeIntegrationDataAttributes";
import { IncidentStatusPageNoticeIntegrationDataResponse } from "./IncidentStatusPageNoticeIntegrationDataResponse";
import { IncidentStatusPageNoticeIntegrationResponse } from "./IncidentStatusPageNoticeIntegrationResponse";
import { IncidentStatusPageNoticeUpdateData } from "./IncidentStatusPageNoticeUpdateData";
import { IncidentStatusPageNoticeUpdateDataAttributes } from "./IncidentStatusPageNoticeUpdateDataAttributes";
import { IncidentStatusPageNoticeUpdateRequest } from "./IncidentStatusPageNoticeUpdateRequest";
import { IncidentStatusPagesSuggestionData } from "./IncidentStatusPagesSuggestionData";
import { IncidentStatusPagesSuggestionDataAttributes } from "./IncidentStatusPagesSuggestionDataAttributes";
import { IncidentStatusPagesSuggestionResponse } from "./IncidentStatusPagesSuggestionResponse";
import { IncidentStatuspageIncidentDataAttributesRequest } from "./IncidentStatuspageIncidentDataAttributesRequest";
import { IncidentStatuspageIncidentDataAttributesResponse } from "./IncidentStatuspageIncidentDataAttributesResponse";
import { IncidentStatuspageIncidentDataRequest } from "./IncidentStatuspageIncidentDataRequest";
import { IncidentStatuspageIncidentDataResponse } from "./IncidentStatuspageIncidentDataResponse";
import { IncidentStatuspageIncidentEntry } from "./IncidentStatuspageIncidentEntry";
import { IncidentStatuspageIncidentRequest } from "./IncidentStatuspageIncidentRequest";
import { IncidentStatuspageIncidentResponse } from "./IncidentStatuspageIncidentResponse";
import { IncidentStatuspagePreferencesData } from "./IncidentStatuspagePreferencesData";
import { IncidentStatuspagePreferencesDataAttributes } from "./IncidentStatuspagePreferencesDataAttributes";
import { IncidentStatuspagePreferencesResponse } from "./IncidentStatuspagePreferencesResponse";
import { IncidentStatuspageSubscriptionDataAttributesRequest } from "./IncidentStatuspageSubscriptionDataAttributesRequest";
import { IncidentStatuspageSubscriptionDataAttributesResponse } from "./IncidentStatuspageSubscriptionDataAttributesResponse";
import { IncidentStatuspageSubscriptionDataRequest } from "./IncidentStatuspageSubscriptionDataRequest";
import { IncidentStatuspageSubscriptionDataResponse } from "./IncidentStatuspageSubscriptionDataResponse";
import { IncidentStatuspageSubscriptionRequest } from "./IncidentStatuspageSubscriptionRequest";
import { IncidentStatuspageSubscriptionResponse } from "./IncidentStatuspageSubscriptionResponse";
import { IncidentStatuspageSubscriptionsResponse } from "./IncidentStatuspageSubscriptionsResponse";
import { IncidentTemplateVariableData } from "./IncidentTemplateVariableData";
import { IncidentTemplateVariableDataAttributes } from "./IncidentTemplateVariableDataAttributes";
import { IncidentTemplateVariablesResponse } from "./IncidentTemplateVariablesResponse";
import { IncidentTimelineCellMarkdownCreateAttributes } from "./IncidentTimelineCellMarkdownCreateAttributes";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";
import { IncidentTimelineEntriesResponse } from "./IncidentTimelineEntriesResponse";
import { IncidentTimelineEntryContent } from "./IncidentTimelineEntryContent";
import { IncidentTimelineEntryDataAttributesRequest } from "./IncidentTimelineEntryDataAttributesRequest";
import { IncidentTimelineEntryDataAttributesResponse } from "./IncidentTimelineEntryDataAttributesResponse";
import { IncidentTimelineEntryDataRequest } from "./IncidentTimelineEntryDataRequest";
import { IncidentTimelineEntryDataResponse } from "./IncidentTimelineEntryDataResponse";
import { IncidentTimelineEntryRequest } from "./IncidentTimelineEntryRequest";
import { IncidentTimelineEntryResponse } from "./IncidentTimelineEntryResponse";
import { IncidentTimelineThreadDataResponse } from "./IncidentTimelineThreadDataResponse";
import { IncidentTimelineThreadResponse } from "./IncidentTimelineThreadResponse";
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
import { IncidentZoomConfigurationDataAttributesRequest } from "./IncidentZoomConfigurationDataAttributesRequest";
import { IncidentZoomConfigurationDataAttributesResponse } from "./IncidentZoomConfigurationDataAttributesResponse";
import { IncidentZoomConfigurationDataRequest } from "./IncidentZoomConfigurationDataRequest";
import { IncidentZoomConfigurationDataResponse } from "./IncidentZoomConfigurationDataResponse";
import { IncidentZoomConfigurationRequest } from "./IncidentZoomConfigurationRequest";
import { IncidentZoomConfigurationResponse } from "./IncidentZoomConfigurationResponse";
import { IncidentZoomIntegrationDataAttributes } from "./IncidentZoomIntegrationDataAttributes";
import { IncidentZoomIntegrationDataResponse } from "./IncidentZoomIntegrationDataResponse";
import { IncidentZoomIntegrationResponse } from "./IncidentZoomIntegrationResponse";
import { IncidentZoomMeeting } from "./IncidentZoomMeeting";
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
    IncidentAttachmentType: ["incident_attachments"],
    IncidentAutomationDataType: ["incidents_automation_data"],
    IncidentCaseLinkType: ["case_link"],
    IncidentCommunicationKind: ["manual", "automated"],
    IncidentCommunicationType: ["communication"],
    IncidentFieldAttributesSingleValueType: ["dropdown", "textbox"],
    IncidentFieldAttributesValueType: [
      "multiselect",
      "textarray",
      "metrictag",
      "autocomplete",
    ],
    IncidentGoogleMeetIntegrationType: ["incident_integrations"],
    IncidentHandleType: ["incidents_handles"],
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
    IncidentJiraIssueIntegrationType: ["incident_integrations"],
    IncidentJiraIssueType: ["incident_jira_issues"],
    IncidentJiraTemplateType: ["incidents_jira_templates"],
    IncidentMicrosoftTeamsConfigurationType: ["microsoft_teams_configurations"],
    IncidentMicrosoftTeamsIntegrationType: ["incident_integrations"],
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
    IncidentPagerdutyServiceType: ["pagerduty_service"],
    IncidentPostmortemType: ["incident_postmortems"],
    IncidentRelatedObject: ["users", "attachments"],
    IncidentRenderedTemplateType: ["rendered_templates"],
    IncidentReservedRoleType: ["incident_reserved_roles"],
    IncidentRespondersType: ["incident_responders"],
    IncidentRoleAssignmentType: ["incident_role_assignments"],
    IncidentRuleExecutionStateType: ["incident_rule_execution_states"],
    IncidentSearchIncidentsIncludeType: [
      "incident_type",
      "impacts",
      "users",
      "responders",
      "integrations",
      "attachments",
    ],
    IncidentSearchIncidentsSortOrder: [
      "created",
      "-created",
      "modified",
      "-modified",
    ],
    IncidentSearchResultsType: ["incidents_search_results"],
    IncidentSearchSortOrder: ["created", "-created"],
    IncidentSeverity: [
      "UNKNOWN",
      "SEV-0",
      "SEV-1",
      "SEV-2",
      "SEV-3",
      "SEV-4",
      "SEV-5",
    ],
    IncidentStatusPageNoticeIntegrationType: ["incident_integrations"],
    IncidentStatusPagesSuggestionType: ["incident_statuspages_suggestion"],
    IncidentStatuspageIncidentType: ["incident_integrations"],
    IncidentStatuspagePreferencesType: ["statuspage_subscription_preferences"],
    IncidentStatuspageSubscriptionType: ["statuspage_email_subscription"],
    IncidentTemplateVariableType: ["template_variables"],
    IncidentTimelineCellMarkdownContentType: ["markdown"],
    IncidentTimelineCellSource: ["slack", "microsoft_teams", "datadog", "api"],
    IncidentTimelineCellType: [
      "markdown",
      "incident_status_change",
      "timestamp_change",
      "meeting_summary",
      "meeting_chat",
      "role_assignment_change",
      "postmortem_change",
    ],
    IncidentTimelineEntryType: ["incident_timeline_cells"],
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
    IncidentZoomConfigurationType: ["zoom_configurations"],
    IncidentZoomIntegrationType: ["incident_integrations"],
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
    IncidentAutomationDataAttributesRequest:
      IncidentAutomationDataAttributesRequest,
    IncidentAutomationDataAttributesResponse:
      IncidentAutomationDataAttributesResponse,
    IncidentAutomationDataDataRequest: IncidentAutomationDataDataRequest,
    IncidentAutomationDataDataResponse: IncidentAutomationDataDataResponse,
    IncidentAutomationDataRequest: IncidentAutomationDataRequest,
    IncidentAutomationDataResponse: IncidentAutomationDataResponse,
    IncidentBatchCreateRuleExecutionStatesData:
      IncidentBatchCreateRuleExecutionStatesData,
    IncidentBatchCreateRuleExecutionStatesDataAttributes:
      IncidentBatchCreateRuleExecutionStatesDataAttributes,
    IncidentBatchCreateRuleExecutionStatesRequest:
      IncidentBatchCreateRuleExecutionStatesRequest,
    IncidentBatchUpdateRuleExecutionStatesData:
      IncidentBatchUpdateRuleExecutionStatesData,
    IncidentBatchUpdateRuleExecutionStatesDataAttributes:
      IncidentBatchUpdateRuleExecutionStatesDataAttributes,
    IncidentBatchUpdateRuleExecutionStatesRequest:
      IncidentBatchUpdateRuleExecutionStatesRequest,
    IncidentCaseLinkData: IncidentCaseLinkData,
    IncidentCaseLinkDataAttributes: IncidentCaseLinkDataAttributes,
    IncidentCaseLinkResponse: IncidentCaseLinkResponse,
    IncidentCommunicationContent: IncidentCommunicationContent,
    IncidentCommunicationContentHandle: IncidentCommunicationContentHandle,
    IncidentCommunicationDataAttributesRequest:
      IncidentCommunicationDataAttributesRequest,
    IncidentCommunicationDataAttributesResponse:
      IncidentCommunicationDataAttributesResponse,
    IncidentCommunicationDataRequest: IncidentCommunicationDataRequest,
    IncidentCommunicationDataResponse: IncidentCommunicationDataResponse,
    IncidentCommunicationRequest: IncidentCommunicationRequest,
    IncidentCommunicationResponse: IncidentCommunicationResponse,
    IncidentCommunicationsResponse: IncidentCommunicationsResponse,
    IncidentCreateAttributes: IncidentCreateAttributes,
    IncidentCreateData: IncidentCreateData,
    IncidentCreateRelationships: IncidentCreateRelationships,
    IncidentCreateRequest: IncidentCreateRequest,
    IncidentCreateZoomMeetingData: IncidentCreateZoomMeetingData,
    IncidentCreateZoomMeetingDataAttributes:
      IncidentCreateZoomMeetingDataAttributes,
    IncidentCreateZoomMeetingRequest: IncidentCreateZoomMeetingRequest,
    IncidentFieldAttributesMultipleValue: IncidentFieldAttributesMultipleValue,
    IncidentFieldAttributesSingleValue: IncidentFieldAttributesSingleValue,
    IncidentGoogleMeetIntegrationDataAttributes:
      IncidentGoogleMeetIntegrationDataAttributes,
    IncidentGoogleMeetIntegrationDataResponse:
      IncidentGoogleMeetIntegrationDataResponse,
    IncidentGoogleMeetIntegrationResponse:
      IncidentGoogleMeetIntegrationResponse,
    IncidentGoogleMeetSpace: IncidentGoogleMeetSpace,
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
    IncidentJiraIssueDataAttributesRequest:
      IncidentJiraIssueDataAttributesRequest,
    IncidentJiraIssueDataRequest: IncidentJiraIssueDataRequest,
    IncidentJiraIssueIntegrationDataAttributes:
      IncidentJiraIssueIntegrationDataAttributes,
    IncidentJiraIssueIntegrationDataResponse:
      IncidentJiraIssueIntegrationDataResponse,
    IncidentJiraIssueIntegrationResponse: IncidentJiraIssueIntegrationResponse,
    IncidentJiraIssueRequest: IncidentJiraIssueRequest,
    IncidentJiraTemplateDataAttributesRequest:
      IncidentJiraTemplateDataAttributesRequest,
    IncidentJiraTemplateDataAttributesResponse:
      IncidentJiraTemplateDataAttributesResponse,
    IncidentJiraTemplateDataRequest: IncidentJiraTemplateDataRequest,
    IncidentJiraTemplateDataResponse: IncidentJiraTemplateDataResponse,
    IncidentJiraTemplateFieldConfiguration:
      IncidentJiraTemplateFieldConfiguration,
    IncidentJiraTemplateIncidentTypeRelationship:
      IncidentJiraTemplateIncidentTypeRelationship,
    IncidentJiraTemplateIncidentTypeRelationshipData:
      IncidentJiraTemplateIncidentTypeRelationshipData,
    IncidentJiraTemplateRelationships: IncidentJiraTemplateRelationships,
    IncidentJiraTemplateRequest: IncidentJiraTemplateRequest,
    IncidentJiraTemplateResponse: IncidentJiraTemplateResponse,
    IncidentJiraTemplatesResponse: IncidentJiraTemplatesResponse,
    IncidentMSTeamsChannel: IncidentMSTeamsChannel,
    IncidentMSTeamsIntegrationDataAttributes:
      IncidentMSTeamsIntegrationDataAttributes,
    IncidentMSTeamsIntegrationDataResponse:
      IncidentMSTeamsIntegrationDataResponse,
    IncidentMSTeamsIntegrationResponse: IncidentMSTeamsIntegrationResponse,
    IncidentMicrosoftTeamsConfigurationDataAttributesRequest:
      IncidentMicrosoftTeamsConfigurationDataAttributesRequest,
    IncidentMicrosoftTeamsConfigurationDataAttributesResponse:
      IncidentMicrosoftTeamsConfigurationDataAttributesResponse,
    IncidentMicrosoftTeamsConfigurationDataRequest:
      IncidentMicrosoftTeamsConfigurationDataRequest,
    IncidentMicrosoftTeamsConfigurationDataResponse:
      IncidentMicrosoftTeamsConfigurationDataResponse,
    IncidentMicrosoftTeamsConfigurationRequest:
      IncidentMicrosoftTeamsConfigurationRequest,
    IncidentMicrosoftTeamsConfigurationResponse:
      IncidentMicrosoftTeamsConfigurationResponse,
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
    IncidentPagerdutyIncidentDataResponse:
      IncidentPagerdutyIncidentDataResponse,
    IncidentPagerdutyRelatedIncidentsResponse:
      IncidentPagerdutyRelatedIncidentsResponse,
    IncidentPagerdutyServiceData: IncidentPagerdutyServiceData,
    IncidentPagerdutyServiceDataAttributes:
      IncidentPagerdutyServiceDataAttributes,
    IncidentPagerdutyServicesResponse: IncidentPagerdutyServicesResponse,
    IncidentRenderTemplateDataAttributesRequest:
      IncidentRenderTemplateDataAttributesRequest,
    IncidentRenderTemplateDataRequest: IncidentRenderTemplateDataRequest,
    IncidentRenderTemplateRequest: IncidentRenderTemplateRequest,
    IncidentRenderedTemplateData: IncidentRenderedTemplateData,
    IncidentRenderedTemplateDataAttributes:
      IncidentRenderedTemplateDataAttributes,
    IncidentRenderedTemplateResponse: IncidentRenderedTemplateResponse,
    IncidentReservedRoleDataAttributesResponse:
      IncidentReservedRoleDataAttributesResponse,
    IncidentReservedRoleDataResponse: IncidentReservedRoleDataResponse,
    IncidentReservedRolePolicy: IncidentReservedRolePolicy,
    IncidentReservedRoleResponse: IncidentReservedRoleResponse,
    IncidentReservedRolesResponse: IncidentReservedRolesResponse,
    IncidentResponse: IncidentResponse,
    IncidentResponseAttributes: IncidentResponseAttributes,
    IncidentResponseData: IncidentResponseData,
    IncidentResponseMeta: IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination,
    IncidentResponseRelationships: IncidentResponseRelationships,
    IncidentRoleAssignmentDataAttributesRequest:
      IncidentRoleAssignmentDataAttributesRequest,
    IncidentRoleAssignmentDataAttributesResponse:
      IncidentRoleAssignmentDataAttributesResponse,
    IncidentRoleAssignmentDataRequest: IncidentRoleAssignmentDataRequest,
    IncidentRoleAssignmentDataResponse: IncidentRoleAssignmentDataResponse,
    IncidentRoleAssignmentRelationshipsRequest:
      IncidentRoleAssignmentRelationshipsRequest,
    IncidentRoleAssignmentRelationshipsResponse:
      IncidentRoleAssignmentRelationshipsResponse,
    IncidentRoleAssignmentRequest: IncidentRoleAssignmentRequest,
    IncidentRoleAssignmentResponderRelationship:
      IncidentRoleAssignmentResponderRelationship,
    IncidentRoleAssignmentResponderRelationshipData:
      IncidentRoleAssignmentResponderRelationshipData,
    IncidentRoleAssignmentResponse: IncidentRoleAssignmentResponse,
    IncidentRoleAssignmentRoleRelationship:
      IncidentRoleAssignmentRoleRelationship,
    IncidentRoleAssignmentRoleRelationshipData:
      IncidentRoleAssignmentRoleRelationshipData,
    IncidentRuleExecutionStateDataAttributesResponse:
      IncidentRuleExecutionStateDataAttributesResponse,
    IncidentRuleExecutionStateDataResponse:
      IncidentRuleExecutionStateDataResponse,
    IncidentRuleExecutionStateRule: IncidentRuleExecutionStateRule,
    IncidentRuleExecutionStatesResponse: IncidentRuleExecutionStatesResponse,
    IncidentSearchIncidentsExportRequest: IncidentSearchIncidentsExportRequest,
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
    IncidentStatusPageNoticeCreateData: IncidentStatusPageNoticeCreateData,
    IncidentStatusPageNoticeCreateDataAttributes:
      IncidentStatusPageNoticeCreateDataAttributes,
    IncidentStatusPageNoticeCreateRequest:
      IncidentStatusPageNoticeCreateRequest,
    IncidentStatusPageNoticeIntegrationDataAttributes:
      IncidentStatusPageNoticeIntegrationDataAttributes,
    IncidentStatusPageNoticeIntegrationDataResponse:
      IncidentStatusPageNoticeIntegrationDataResponse,
    IncidentStatusPageNoticeIntegrationResponse:
      IncidentStatusPageNoticeIntegrationResponse,
    IncidentStatusPageNoticeUpdateData: IncidentStatusPageNoticeUpdateData,
    IncidentStatusPageNoticeUpdateDataAttributes:
      IncidentStatusPageNoticeUpdateDataAttributes,
    IncidentStatusPageNoticeUpdateRequest:
      IncidentStatusPageNoticeUpdateRequest,
    IncidentStatusPagesSuggestionData: IncidentStatusPagesSuggestionData,
    IncidentStatusPagesSuggestionDataAttributes:
      IncidentStatusPagesSuggestionDataAttributes,
    IncidentStatusPagesSuggestionResponse:
      IncidentStatusPagesSuggestionResponse,
    IncidentStatuspageIncidentDataAttributesRequest:
      IncidentStatuspageIncidentDataAttributesRequest,
    IncidentStatuspageIncidentDataAttributesResponse:
      IncidentStatuspageIncidentDataAttributesResponse,
    IncidentStatuspageIncidentDataRequest:
      IncidentStatuspageIncidentDataRequest,
    IncidentStatuspageIncidentDataResponse:
      IncidentStatuspageIncidentDataResponse,
    IncidentStatuspageIncidentEntry: IncidentStatuspageIncidentEntry,
    IncidentStatuspageIncidentRequest: IncidentStatuspageIncidentRequest,
    IncidentStatuspageIncidentResponse: IncidentStatuspageIncidentResponse,
    IncidentStatuspagePreferencesData: IncidentStatuspagePreferencesData,
    IncidentStatuspagePreferencesDataAttributes:
      IncidentStatuspagePreferencesDataAttributes,
    IncidentStatuspagePreferencesResponse:
      IncidentStatuspagePreferencesResponse,
    IncidentStatuspageSubscriptionDataAttributesRequest:
      IncidentStatuspageSubscriptionDataAttributesRequest,
    IncidentStatuspageSubscriptionDataAttributesResponse:
      IncidentStatuspageSubscriptionDataAttributesResponse,
    IncidentStatuspageSubscriptionDataRequest:
      IncidentStatuspageSubscriptionDataRequest,
    IncidentStatuspageSubscriptionDataResponse:
      IncidentStatuspageSubscriptionDataResponse,
    IncidentStatuspageSubscriptionRequest:
      IncidentStatuspageSubscriptionRequest,
    IncidentStatuspageSubscriptionResponse:
      IncidentStatuspageSubscriptionResponse,
    IncidentStatuspageSubscriptionsResponse:
      IncidentStatuspageSubscriptionsResponse,
    IncidentTemplateVariableData: IncidentTemplateVariableData,
    IncidentTemplateVariableDataAttributes:
      IncidentTemplateVariableDataAttributes,
    IncidentTemplateVariablesResponse: IncidentTemplateVariablesResponse,
    IncidentTimelineCellMarkdownCreateAttributes:
      IncidentTimelineCellMarkdownCreateAttributes,
    IncidentTimelineCellMarkdownCreateAttributesContent:
      IncidentTimelineCellMarkdownCreateAttributesContent,
    IncidentTimelineEntriesResponse: IncidentTimelineEntriesResponse,
    IncidentTimelineEntryContent: IncidentTimelineEntryContent,
    IncidentTimelineEntryDataAttributesRequest:
      IncidentTimelineEntryDataAttributesRequest,
    IncidentTimelineEntryDataAttributesResponse:
      IncidentTimelineEntryDataAttributesResponse,
    IncidentTimelineEntryDataRequest: IncidentTimelineEntryDataRequest,
    IncidentTimelineEntryDataResponse: IncidentTimelineEntryDataResponse,
    IncidentTimelineEntryRequest: IncidentTimelineEntryRequest,
    IncidentTimelineEntryResponse: IncidentTimelineEntryResponse,
    IncidentTimelineThreadDataResponse: IncidentTimelineThreadDataResponse,
    IncidentTimelineThreadResponse: IncidentTimelineThreadResponse,
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
    IncidentZoomConfigurationDataAttributesRequest:
      IncidentZoomConfigurationDataAttributesRequest,
    IncidentZoomConfigurationDataAttributesResponse:
      IncidentZoomConfigurationDataAttributesResponse,
    IncidentZoomConfigurationDataRequest: IncidentZoomConfigurationDataRequest,
    IncidentZoomConfigurationDataResponse:
      IncidentZoomConfigurationDataResponse,
    IncidentZoomConfigurationRequest: IncidentZoomConfigurationRequest,
    IncidentZoomConfigurationResponse: IncidentZoomConfigurationResponse,
    IncidentZoomIntegrationDataAttributes:
      IncidentZoomIntegrationDataAttributes,
    IncidentZoomIntegrationDataResponse: IncidentZoomIntegrationDataResponse,
    IncidentZoomIntegrationResponse: IncidentZoomIntegrationResponse,
    IncidentZoomMeeting: IncidentZoomMeeting,
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
