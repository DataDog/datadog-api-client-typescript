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
import { LeakedKey } from "./LeakedKey";
import { LeakedKeyAttributes } from "./LeakedKeyAttributes";
import { ListApplicationKeysResponse } from "./ListApplicationKeysResponse";
import { NullableRelationshipToUser } from "./NullableRelationshipToUser";
import { NullableRelationshipToUserData } from "./NullableRelationshipToUserData";
import { PartialAPIKey } from "./PartialAPIKey";
import { PartialAPIKeyAttributes } from "./PartialAPIKeyAttributes";
import { PartialApplicationKey } from "./PartialApplicationKey";
import { PartialApplicationKeyAttributes } from "./PartialApplicationKeyAttributes";
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
    LeakedKey: LeakedKey,
    LeakedKeyAttributes: LeakedKeyAttributes,
    ListApplicationKeysResponse: ListApplicationKeysResponse,
    NullableRelationshipToUser: NullableRelationshipToUser,
    NullableRelationshipToUserData: NullableRelationshipToUserData,
    PartialAPIKey: PartialAPIKey,
    PartialAPIKeyAttributes: PartialAPIKeyAttributes,
    PartialApplicationKey: PartialApplicationKey,
    PartialApplicationKeyAttributes: PartialApplicationKeyAttributes,
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
