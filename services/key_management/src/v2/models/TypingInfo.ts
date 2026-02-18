import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { APIKeyCreateAttributes } from "./APIKeyCreateAttributes";
import { APIKeyCreateData } from "./APIKeyCreateData";
import { APIKeyCreateRequest } from "./APIKeyCreateRequest";
import { APIKeyRelationships } from "./APIKeyRelationships";
import { APIKeyResponse } from "./APIKeyResponse";
import { APIKeyUpdateAttributes } from "./APIKeyUpdateAttributes";
import { APIKeyUpdateData } from "./APIKeyUpdateData";
import { APIKeyUpdateRequest } from "./APIKeyUpdateRequest";
import { APIKeysResponse } from "./APIKeysResponse";
import { APIKeysResponseMeta } from "./APIKeysResponseMeta";
import { APIKeysResponseMetaPage } from "./APIKeysResponseMetaPage";
import { ApplicationKeyCreateAttributes } from "./ApplicationKeyCreateAttributes";
import { ApplicationKeyCreateData } from "./ApplicationKeyCreateData";
import { ApplicationKeyCreateRequest } from "./ApplicationKeyCreateRequest";
import { ApplicationKeyRelationships } from "./ApplicationKeyRelationships";
import { ApplicationKeyResponse } from "./ApplicationKeyResponse";
import { ApplicationKeyResponseMeta } from "./ApplicationKeyResponseMeta";
import { ApplicationKeyResponseMetaPage } from "./ApplicationKeyResponseMetaPage";
import { ApplicationKeyUpdateAttributes } from "./ApplicationKeyUpdateAttributes";
import { ApplicationKeyUpdateData } from "./ApplicationKeyUpdateData";
import { ApplicationKeyUpdateRequest } from "./ApplicationKeyUpdateRequest";
import { FullAPIKey } from "./FullAPIKey";
import { FullAPIKeyAttributes } from "./FullAPIKeyAttributes";
import { FullApplicationKey } from "./FullApplicationKey";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";
import { FullPersonalAccessToken } from "./FullPersonalAccessToken";
import { FullPersonalAccessTokenAttributes } from "./FullPersonalAccessTokenAttributes";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { LeakedKey } from "./LeakedKey";
import { LeakedKeyAttributes } from "./LeakedKeyAttributes";
import { ListApplicationKeysResponse } from "./ListApplicationKeysResponse";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
import { PartialAPIKey } from "./PartialAPIKey";
import { PartialAPIKeyAttributes } from "./PartialAPIKeyAttributes";
import { PartialApplicationKey } from "./PartialApplicationKey";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";
import { PersonalAccessToken } from "./PersonalAccessToken";
import { PersonalAccessTokenAttributes } from "./PersonalAccessTokenAttributes";
import { PersonalAccessTokenCreateAttributes } from "./PersonalAccessTokenCreateAttributes";
import { PersonalAccessTokenCreateData } from "./PersonalAccessTokenCreateData";
import { PersonalAccessTokenCreateRequest } from "./PersonalAccessTokenCreateRequest";
import { PersonalAccessTokenGetResponse } from "./PersonalAccessTokenGetResponse";
import { PersonalAccessTokenRelationships } from "./PersonalAccessTokenRelationships";
import { PersonalAccessTokenResponse } from "./PersonalAccessTokenResponse";
import { PersonalAccessTokenUpdateAttributes } from "./PersonalAccessTokenUpdateAttributes";
import { PersonalAccessTokenUpdateData } from "./PersonalAccessTokenUpdateData";
import { PersonalAccessTokenUpdateRequest } from "./PersonalAccessTokenUpdateRequest";
import { PersonalAccessTokensListResponse } from "./PersonalAccessTokensListResponse";
import { PersonalAccessTokensResponseMeta } from "./PersonalAccessTokensResponseMeta";
import { PersonalAccessTokensResponseMetaPage } from "./PersonalAccessTokensResponseMetaPage";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    APIKeysSort: [
      "created_at",
      "-created_at",
      "last4",
      "-last4",
      "modified_at",
      "-modified_at",
      "name",
      "-name",
    ],
    APIKeysType: ["api_keys"],
    ApplicationKeysSort: [
      "created_at",
      "-created_at",
      "last4",
      "-last4",
      "name",
      "-name",
    ],
    ApplicationKeysType: ["application_keys"],
    LeakedKeyType: ["leaked_keys"],
    OrganizationsType: ["orgs"],
    PermissionsType: ["permissions"],
    PersonalAccessTokenType: ["personal_access_tokens"],
    PersonalAccessTokensSort: [
      "name",
      "-name",
      "created_at",
      "-created_at",
      "expires_at",
      "-expires_at",
    ],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    APIKeyResponseIncludedItem: ["User", "LeakedKey"],
    ApplicationKeyResponseIncludedItem: ["User", "Role", "LeakedKey"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    APIKeyCreateAttributes: APIKeyCreateAttributes,
    APIKeyCreateData: APIKeyCreateData,
    APIKeyCreateRequest: APIKeyCreateRequest,
    APIKeyRelationships: APIKeyRelationships,
    APIKeyResponse: APIKeyResponse,
    APIKeyUpdateAttributes: APIKeyUpdateAttributes,
    APIKeyUpdateData: APIKeyUpdateData,
    APIKeyUpdateRequest: APIKeyUpdateRequest,
    APIKeysResponse: APIKeysResponse,
    APIKeysResponseMeta: APIKeysResponseMeta,
    APIKeysResponseMetaPage: APIKeysResponseMetaPage,
    ApplicationKeyCreateAttributes: ApplicationKeyCreateAttributes,
    ApplicationKeyCreateData: ApplicationKeyCreateData,
    ApplicationKeyCreateRequest: ApplicationKeyCreateRequest,
    ApplicationKeyRelationships: ApplicationKeyRelationships,
    ApplicationKeyResponse: ApplicationKeyResponse,
    ApplicationKeyResponseMeta: ApplicationKeyResponseMeta,
    ApplicationKeyResponseMetaPage: ApplicationKeyResponseMetaPage,
    ApplicationKeyUpdateAttributes: ApplicationKeyUpdateAttributes,
    ApplicationKeyUpdateData: ApplicationKeyUpdateData,
    ApplicationKeyUpdateRequest: ApplicationKeyUpdateRequest,
    FullAPIKey: FullAPIKey,
    FullAPIKeyAttributes: FullAPIKeyAttributes,
    FullApplicationKey: FullApplicationKey,
    FullApplicationKeyAttributes: FullApplicationKeyAttributes,
    FullPersonalAccessToken: FullPersonalAccessToken,
    FullPersonalAccessTokenAttributes: FullPersonalAccessTokenAttributes,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    LeakedKey: LeakedKey,
    LeakedKeyAttributes: LeakedKeyAttributes,
    ListApplicationKeysResponse: ListApplicationKeysResponse,
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
    PartialAPIKey: PartialAPIKey,
    PartialAPIKeyAttributes: PartialAPIKeyAttributes,
    PartialApplicationKey: PartialApplicationKey,
    PartialApplicationKeyAttributes: PartialApplicationKeyAttributes,
    PersonalAccessToken: PersonalAccessToken,
    PersonalAccessTokenAttributes: PersonalAccessTokenAttributes,
    PersonalAccessTokenCreateAttributes: PersonalAccessTokenCreateAttributes,
    PersonalAccessTokenCreateData: PersonalAccessTokenCreateData,
    PersonalAccessTokenCreateRequest: PersonalAccessTokenCreateRequest,
    PersonalAccessTokenGetResponse: PersonalAccessTokenGetResponse,
    PersonalAccessTokenRelationships: PersonalAccessTokenRelationships,
    PersonalAccessTokenResponse: PersonalAccessTokenResponse,
    PersonalAccessTokenUpdateAttributes: PersonalAccessTokenUpdateAttributes,
    PersonalAccessTokenUpdateData: PersonalAccessTokenUpdateData,
    PersonalAccessTokenUpdateRequest: PersonalAccessTokenUpdateRequest,
    PersonalAccessTokensListResponse: PersonalAccessTokensListResponse,
    PersonalAccessTokensResponseMeta: PersonalAccessTokensResponseMeta,
    PersonalAccessTokensResponseMetaPage: PersonalAccessTokensResponseMetaPage,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
  },
};
