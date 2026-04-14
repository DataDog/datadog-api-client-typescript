import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
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
import { FullApplicationKey } from "./FullApplicationKey";
import { FullApplicationKeyAttributes } from "./FullApplicationKeyAttributes";
import { FullPersonalAccessToken } from "./FullPersonalAccessToken";
import { FullPersonalAccessTokenAttributes } from "./FullPersonalAccessTokenAttributes";
import { LeakedKey } from "./LeakedKey";
import { LeakedKeyAttributes } from "./LeakedKeyAttributes";
import { ListApplicationKeysResponse } from "./ListApplicationKeysResponse";
import { ListPersonalAccessTokensResponse } from "./ListPersonalAccessTokensResponse";
import { Organization } from "./Organization";
import { OrganizationAttributes } from "./OrganizationAttributes";
import { PartialApplicationKey } from "./PartialApplicationKey";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";
import { PartialApplicationKeyResponse } from "./PartialApplicationKeyResponse";
import { Permission } from "./Permission";
import { PermissionAttributes } from "./PermissionAttributes";
import { PersonalAccessToken } from "./PersonalAccessToken";
import { PersonalAccessTokenAttributes } from "./PersonalAccessTokenAttributes";
import { PersonalAccessTokenCreateResponse } from "./PersonalAccessTokenCreateResponse";
import { PersonalAccessTokenRelationships } from "./PersonalAccessTokenRelationships";
import { PersonalAccessTokenResponse } from "./PersonalAccessTokenResponse";
import { PersonalAccessTokenResponseMeta } from "./PersonalAccessTokenResponseMeta";
import { PersonalAccessTokenResponseMetaPage } from "./PersonalAccessTokenResponseMetaPage";
import { PersonalAccessTokenUpdateAttributes } from "./PersonalAccessTokenUpdateAttributes";
import { PersonalAccessTokenUpdateData } from "./PersonalAccessTokenUpdateData";
import { PersonalAccessTokenUpdateRequest } from "./PersonalAccessTokenUpdateRequest";
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
import { ServiceAccountAccessTokenCreateAttributes } from "./ServiceAccountAccessTokenCreateAttributes";
import { ServiceAccountAccessTokenCreateData } from "./ServiceAccountAccessTokenCreateData";
import { ServiceAccountAccessTokenCreateRequest } from "./ServiceAccountAccessTokenCreateRequest";
import { ServiceAccountCreateAttributes } from "./ServiceAccountCreateAttributes";
import { ServiceAccountCreateData } from "./ServiceAccountCreateData";
import { ServiceAccountCreateRequest } from "./ServiceAccountCreateRequest";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserRelationships } from "./UserRelationships";
import { UserResponse } from "./UserResponse";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
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
    PersonalAccessTokensSort: [
      "name",
      "-name",
      "created_at",
      "-created_at",
      "expires_at",
      "-expires_at",
    ],
    PersonalAccessTokensType: ["personal_access_tokens"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    ApplicationKeyResponseIncludedItem: ["User", "Role", "LeakedKey"],
    UserResponseIncludedItem: ["Organization", "Permission", "Role"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
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
    FullApplicationKey: FullApplicationKey,
    FullApplicationKeyAttributes: FullApplicationKeyAttributes,
    FullPersonalAccessToken: FullPersonalAccessToken,
    FullPersonalAccessTokenAttributes: FullPersonalAccessTokenAttributes,
    LeakedKey: LeakedKey,
    LeakedKeyAttributes: LeakedKeyAttributes,
    ListApplicationKeysResponse: ListApplicationKeysResponse,
    ListPersonalAccessTokensResponse: ListPersonalAccessTokensResponse,
    Organization: Organization,
    OrganizationAttributes: OrganizationAttributes,
    PartialApplicationKey: PartialApplicationKey,
    PartialApplicationKeyAttributes: PartialApplicationKeyAttributes,
    PartialApplicationKeyResponse: PartialApplicationKeyResponse,
    Permission: Permission,
    PermissionAttributes: PermissionAttributes,
    PersonalAccessToken: PersonalAccessToken,
    PersonalAccessTokenAttributes: PersonalAccessTokenAttributes,
    PersonalAccessTokenCreateResponse: PersonalAccessTokenCreateResponse,
    PersonalAccessTokenRelationships: PersonalAccessTokenRelationships,
    PersonalAccessTokenResponse: PersonalAccessTokenResponse,
    PersonalAccessTokenResponseMeta: PersonalAccessTokenResponseMeta,
    PersonalAccessTokenResponseMetaPage: PersonalAccessTokenResponseMetaPage,
    PersonalAccessTokenUpdateAttributes: PersonalAccessTokenUpdateAttributes,
    PersonalAccessTokenUpdateData: PersonalAccessTokenUpdateData,
    PersonalAccessTokenUpdateRequest: PersonalAccessTokenUpdateRequest,
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
    ServiceAccountAccessTokenCreateAttributes:
      ServiceAccountAccessTokenCreateAttributes,
    ServiceAccountAccessTokenCreateData: ServiceAccountAccessTokenCreateData,
    ServiceAccountAccessTokenCreateRequest:
      ServiceAccountAccessTokenCreateRequest,
    ServiceAccountCreateAttributes: ServiceAccountCreateAttributes,
    ServiceAccountCreateData: ServiceAccountCreateData,
    ServiceAccountCreateRequest: ServiceAccountCreateRequest,
    User: User,
    UserAttributes: UserAttributes,
    UserRelationships: UserRelationships,
    UserResponse: UserResponse,
    UserResponseRelationships: UserResponseRelationships,
  },
};
