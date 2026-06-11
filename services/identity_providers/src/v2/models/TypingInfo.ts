import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IdentityProviderAttributes } from "./IdentityProviderAttributes";
import { IdentityProviderData } from "./IdentityProviderData";
import { IdentityProviderResponse } from "./IdentityProviderResponse";
import { IdentityProviderUpdateAttributes } from "./IdentityProviderUpdateAttributes";
import { IdentityProviderUpdateData } from "./IdentityProviderUpdateData";
import { IdentityProviderUpdateRequest } from "./IdentityProviderUpdateRequest";
import { IdentityProvidersResponse } from "./IdentityProvidersResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { Organization } from "./Organization";
import { OrganizationAttributes } from "./OrganizationAttributes";
import { Pagination } from "./Pagination";
import { Permission } from "./Permission";
import { PermissionAttributes } from "./PermissionAttributes";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UsersResponse } from "./UsersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IdentityProviderType: ["identity_providers"],
    OrganizationsType: ["orgs"],
    PermissionsType: ["permissions"],
    QuerySortOrder: ["asc", "desc"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    UserResponseIncludedItem: ["Organization", "Permission", "Role"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IdentityProviderAttributes: IdentityProviderAttributes,
    IdentityProviderData: IdentityProviderData,
    IdentityProviderResponse: IdentityProviderResponse,
    IdentityProviderUpdateAttributes: IdentityProviderUpdateAttributes,
    IdentityProviderUpdateData: IdentityProviderUpdateData,
    IdentityProviderUpdateRequest: IdentityProviderUpdateRequest,
    IdentityProvidersResponse: IdentityProvidersResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    Organization: Organization,
    OrganizationAttributes: OrganizationAttributes,
    Pagination: Pagination,
    Permission: Permission,
    PermissionAttributes: PermissionAttributes,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    ResponseMetaAttributes: ResponseMetaAttributes,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
    UsersResponse: UsersResponse,
  },
};
