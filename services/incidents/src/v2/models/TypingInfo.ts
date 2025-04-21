import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
import { IncidentCreateRelationships } from "./IncidentCreateRelationships";
import { IncidentCreateRequest } from "./IncidentCreateRequest";
import { IncidentFieldAttributesMultipleValue } from "./IncidentFieldAttributesMultipleValue";
import { IncidentFieldAttributesSingleValue } from "./IncidentFieldAttributesSingleValue";
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
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
import { RelationshipToIncidentAttachment } from "./RelationshipToIncidentAttachment";
import { RelationshipToIncidentAttachmentData } from "./RelationshipToIncidentAttachmentData";
import { RelationshipToIncidentImpactData } from "./RelationshipToIncidentImpactData";
import { RelationshipToIncidentImpacts } from "./RelationshipToIncidentImpacts";
import { RelationshipToIncidentIntegrationMetadataData } from "./RelationshipToIncidentIntegrationMetadataData";
import { RelationshipToIncidentIntegrationMetadatas } from "./RelationshipToIncidentIntegrationMetadatas";
import { RelationshipToIncidentPostmortem } from "./RelationshipToIncidentPostmortem";
import { RelationshipToIncidentPostmortemData } from "./RelationshipToIncidentPostmortemData";
import { RelationshipToIncidentResponderData } from "./RelationshipToIncidentResponderData";
import { RelationshipToIncidentResponders } from "./RelationshipToIncidentResponders";
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
    IncidentImpactsType: ["incident_impacts"],
    IncidentIntegrationMetadataType: ["incident_integrations"],
    IncidentPostmortemType: ["incident_postmortems"],
    IncidentRelatedObject: ["users", "attachments"],
    IncidentRespondersType: ["incident_responders"],
    IncidentSearchResultsType: ["incidents_search_results"],
    IncidentSearchSortOrder: ["created", "-created"],
    IncidentSeverity: ["UNKNOWN", "SEV-1", "SEV-2", "SEV-3", "SEV-4", "SEV-5"],
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
    IncidentCreateRelationships: IncidentCreateRelationships,
    IncidentCreateRequest: IncidentCreateRequest,
    IncidentFieldAttributesMultipleValue: IncidentFieldAttributesMultipleValue,
    IncidentFieldAttributesSingleValue: IncidentFieldAttributesSingleValue,
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
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
    RelationshipToIncidentAttachment: RelationshipToIncidentAttachment,
    RelationshipToIncidentAttachmentData: RelationshipToIncidentAttachmentData,
    RelationshipToIncidentImpactData: RelationshipToIncidentImpactData,
    RelationshipToIncidentImpacts: RelationshipToIncidentImpacts,
    RelationshipToIncidentIntegrationMetadataData:
      RelationshipToIncidentIntegrationMetadataData,
    RelationshipToIncidentIntegrationMetadatas:
      RelationshipToIncidentIntegrationMetadatas,
    RelationshipToIncidentPostmortem: RelationshipToIncidentPostmortem,
    RelationshipToIncidentPostmortemData: RelationshipToIncidentPostmortemData,
    RelationshipToIncidentResponderData: RelationshipToIncidentResponderData,
    RelationshipToIncidentResponders: RelationshipToIncidentResponders,
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
  },
};
