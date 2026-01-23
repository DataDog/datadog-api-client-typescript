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
import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateData } from "./IncidentCreateData";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentCreateRequest } from "./IncidentCreateRequest";
import { IncidentFieldAttributesMultipleValue } from "./IncidentFieldAttributesMultipleValue";
import { IncidentFieldAttributesSingleValue } from "./IncidentFieldAttributesSingleValue";
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
import { IncidentResponse } from "./IncidentResponse";
import { IncidentResponseAttributes } from "./IncidentResponseAttributes";
import { IncidentResponseData } from "./IncidentResponseData";
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";
import { IncidentResponseRelationships } from "./IncidentResponseRelationships";
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
import { IncidentTimelineCellMarkdownCreateAttributes } from "./IncidentTimelineCellMarkdownCreateAttributes";
import { IncidentTimelineCellMarkdownCreateAttributesContent } from "./IncidentTimelineCellMarkdownCreateAttributesContent";
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
    IncidentFieldAttributesSingleValueType: ["dropdown", "textbox"],
    IncidentFieldAttributesValueType: [
      "multiselect",
      "textarray",
      "metrictag",
      "autocomplete",
    ],
    IncidentHandleType: ["incidents_handles"],
    IncidentImpactRelatedObject: [
      "incident",
      "created_by_user",
      "last_modified_by_user",
    ],
    IncidentImpactType: ["incident_impacts"],
    IncidentImpactsType: ["incident_impacts"],
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
    IncidentPostmortemType: ["incident_postmortems"],
    IncidentRelatedObject: ["users", "attachments"],
    IncidentRespondersType: ["incident_responders"],
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
    IncidentTimelineCellMarkdownContentType: ["markdown"],
    IncidentTodoAnonymousAssigneeSource: ["slack", "microsoft_teams"],
    IncidentTodoType: ["incident_todos"],
    IncidentType: ["incidents"],
    IncidentTypeType: ["incident_types"],
    IncidentUserDefinedFieldType: ["user_defined_field"],
    OrganizationsType: ["orgs"],
    PostmortemCellType: ["markdown"],
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
    IncidentCreateAttributes: IncidentCreateAttributes,
    IncidentCreateData: IncidentCreateData,
    IncidentCreateRelationships: IncidentCreateRelationships,
    IncidentCreateRequest: IncidentCreateRequest,
    IncidentFieldAttributesMultipleValue: IncidentFieldAttributesMultipleValue,
    IncidentFieldAttributesSingleValue: IncidentFieldAttributesSingleValue,
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
    IncidentResponse: IncidentResponse,
    IncidentResponseAttributes: IncidentResponseAttributes,
    IncidentResponseData: IncidentResponseData,
    IncidentResponseMeta: IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination,
    IncidentResponseRelationships: IncidentResponseRelationships,
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
    IncidentTimelineCellMarkdownCreateAttributes:
      IncidentTimelineCellMarkdownCreateAttributes,
    IncidentTimelineCellMarkdownCreateAttributesContent:
      IncidentTimelineCellMarkdownCreateAttributesContent,
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
