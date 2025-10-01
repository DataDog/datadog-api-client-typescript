import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { CreateIncidentNotificationRuleRequest } from "./CreateIncidentNotificationRuleRequest";
import { CreateIncidentNotificationTemplateRequest } from "./CreateIncidentNotificationTemplateRequest";
import { GoogleMeetConfigurationReference } from "./GoogleMeetConfigurationReference";
import { GoogleMeetConfigurationReferenceData } from "./GoogleMeetConfigurationReferenceData";
import { IncidentAttachmentData } from "./IncidentAttachmentData";
import { IncidentAttachmentLinkAttributes } from "./IncidentAttachmentLinkAttributes";
import { IncidentAttachmentLinkAttributesAttachmentObject } from "./IncidentAttachmentLinkAttributesAttachmentObject";
import { IncidentAttachmentPostmortemAttributes } from "./IncidentAttachmentPostmortemAttributes";
import { IncidentAttachmentRelationships } from "./IncidentAttachmentRelationships";
import { IncidentAttachmentUpdateData } from "./IncidentAttachmentUpdateData";
import { IncidentAttachmentUpdateRequest } from "./IncidentAttachmentUpdateRequest";
import { IncidentAttachmentUpdateResponse } from "./IncidentAttachmentUpdateResponse";
import { IncidentAttachmentsPostmortemAttributesAttachmentObject } from "./IncidentAttachmentsPostmortemAttributesAttachmentObject";
import { IncidentAttachmentsResponse } from "./IncidentAttachmentsResponse";
import { IncidentCreateAttributes } from "./IncidentCreateAttributes";
import { IncidentCreateData } from "./IncidentCreateData";
import { IncidentCreatePageAttributes } from "./IncidentCreatePageAttributes";
import { IncidentCreatePageFromIncidentData } from "./IncidentCreatePageFromIncidentData";
import { IncidentCreatePageFromIncidentRequest } from "./IncidentCreatePageFromIncidentRequest";
import { IncidentCreatePageResponse } from "./IncidentCreatePageResponse";
import { IncidentCreatePageResponseData } from "./IncidentCreatePageResponseData";
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentCreateRequest } from "./IncidentCreateRequest";
import { IncidentFieldAttributesMultipleValue } from "./IncidentFieldAttributesMultipleValue";
import { IncidentFieldAttributesSingleValue } from "./IncidentFieldAttributesSingleValue";
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
import { IncidentPageTarget } from "./IncidentPageTarget";
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
import { JiraIntegrationMetadata } from "./JiraIntegrationMetadata";
import { JiraIntegrationMetadataIssuesItem } from "./JiraIntegrationMetadataIssuesItem";
import { MSTeamsIntegrationMetadata } from "./MSTeamsIntegrationMetadata";
import { MSTeamsIntegrationMetadataTeamsItem } from "./MSTeamsIntegrationMetadataTeamsItem";
import { MicrosoftTeamsConfigurationReference } from "./MicrosoftTeamsConfigurationReference";
import { MicrosoftTeamsConfigurationReferenceData } from "./MicrosoftTeamsConfigurationReferenceData";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
import { PatchIncidentNotificationTemplateRequest } from "./PatchIncidentNotificationTemplateRequest";
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
    IncidentAttachmentAttachmentType: ["link", "postmortem"],
    IncidentAttachmentLinkAttachmentType: ["link"],
    IncidentAttachmentPostmortemAttachmentType: ["postmortem"],
    IncidentAttachmentRelatedObject: ["users"],
    IncidentAttachmentType: ["incident_attachments"],
    IncidentFieldAttributesSingleValueType: ["dropdown", "textbox"],
    IncidentFieldAttributesValueType: [
      "multiselect",
      "textarray",
      "metrictag",
      "autocomplete",
    ],
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
    IncidentPageIdType: ["page_uuid"],
    IncidentPageTargetType: ["team_handle", "team_uuid", "user_uuid"],
    IncidentPageType: ["page"],
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
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    IncidentAttachmentAttributes: [
      "IncidentAttachmentPostmortemAttributes",
      "IncidentAttachmentLinkAttributes",
    ],
    IncidentAttachmentUpdateAttributes: [
      "IncidentAttachmentPostmortemAttributes",
      "IncidentAttachmentLinkAttributes",
    ],
    IncidentAttachmentsResponseIncludedItem: ["User"],
    IncidentFieldAttributes: [
      "IncidentFieldAttributesSingleValue",
      "IncidentFieldAttributesMultipleValue",
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
    IncidentResponseIncludedItem: [
      "IncidentUserData",
      "IncidentAttachmentData",
    ],
    IncidentTimelineCellCreateAttributes: [
      "IncidentTimelineCellMarkdownCreateAttributes",
    ],
    IncidentTodoAssignee: ["string", "IncidentTodoAnonymousAssignee"],
    IncidentTodoResponseIncludedItem: ["User"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    CreateIncidentNotificationRuleRequest:
      CreateIncidentNotificationRuleRequest,
    CreateIncidentNotificationTemplateRequest:
      CreateIncidentNotificationTemplateRequest,
    GoogleMeetConfigurationReference: GoogleMeetConfigurationReference,
    GoogleMeetConfigurationReferenceData: GoogleMeetConfigurationReferenceData,
    IncidentAttachmentData: IncidentAttachmentData,
    IncidentAttachmentLinkAttributes: IncidentAttachmentLinkAttributes,
    IncidentAttachmentLinkAttributesAttachmentObject:
      IncidentAttachmentLinkAttributesAttachmentObject,
    IncidentAttachmentPostmortemAttributes:
      IncidentAttachmentPostmortemAttributes,
    IncidentAttachmentRelationships: IncidentAttachmentRelationships,
    IncidentAttachmentUpdateData: IncidentAttachmentUpdateData,
    IncidentAttachmentUpdateRequest: IncidentAttachmentUpdateRequest,
    IncidentAttachmentUpdateResponse: IncidentAttachmentUpdateResponse,
    IncidentAttachmentsPostmortemAttributesAttachmentObject:
      IncidentAttachmentsPostmortemAttributesAttachmentObject,
    IncidentAttachmentsResponse: IncidentAttachmentsResponse,
    IncidentCreateAttributes: IncidentCreateAttributes,
    IncidentCreateData: IncidentCreateData,
    IncidentCreatePageAttributes: IncidentCreatePageAttributes,
    IncidentCreatePageFromIncidentData: IncidentCreatePageFromIncidentData,
    IncidentCreatePageFromIncidentRequest:
      IncidentCreatePageFromIncidentRequest,
    IncidentCreatePageResponse: IncidentCreatePageResponse,
    IncidentCreatePageResponseData: IncidentCreatePageResponseData,
    IncidentCreateRelationships: IncidentCreateRelationships,
    IncidentCreateRequest: IncidentCreateRequest,
    IncidentFieldAttributesMultipleValue: IncidentFieldAttributesMultipleValue,
    IncidentFieldAttributesSingleValue: IncidentFieldAttributesSingleValue,
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
    IncidentPageTarget: IncidentPageTarget,
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
    JiraIntegrationMetadata: JiraIntegrationMetadata,
    JiraIntegrationMetadataIssuesItem: JiraIntegrationMetadataIssuesItem,
    MSTeamsIntegrationMetadata: MSTeamsIntegrationMetadata,
    MSTeamsIntegrationMetadataTeamsItem: MSTeamsIntegrationMetadataTeamsItem,
    MicrosoftTeamsConfigurationReference: MicrosoftTeamsConfigurationReference,
    MicrosoftTeamsConfigurationReferenceData:
      MicrosoftTeamsConfigurationReferenceData,
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
    PatchIncidentNotificationTemplateRequest:
      PatchIncidentNotificationTemplateRequest,
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
