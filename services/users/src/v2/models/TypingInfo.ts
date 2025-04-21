import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { Organization } from "./Organization";
import { OrganizationAttributes } from "./OrganizationAttributes";
import { Pagination } from "./Pagination";
import { Permission } from "./Permission";
import { PermissionAttributes } from "./PermissionAttributes";
import { PermissionsResponse } from "./PermissionsResponse";
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
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserCreateAttributes } from "./UserCreateAttributes";
import { UserCreateData } from "./UserCreateData";
import { UserCreateRequest } from "./UserCreateRequest";
import { UserInvitationData } from "./UserInvitationData";
import { UserInvitationDataAttributes } from "./UserInvitationDataAttributes";
import { UserInvitationRelationships } from "./UserInvitationRelationships";
import { UserInvitationResponse } from "./UserInvitationResponse";
import { UserInvitationResponseData } from "./UserInvitationResponseData";
import { UserInvitationsRequest } from "./UserInvitationsRequest";
import { UserInvitationsResponse } from "./UserInvitationsResponse";
import { UserRelationships } from "./UserRelationships";
import { UserResponse } from "./UserResponse";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UserUpdateAttributes } from "./UserUpdateAttributes";
import { UserUpdateData } from "./UserUpdateData";
import { UserUpdateRequest } from "./UserUpdateRequest";
import { UsersResponse } from "./UsersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrganizationsType: ["orgs"],
    PermissionsType: ["permissions"],
    QuerySortOrder: ["asc", "desc"],
    RolesType: ["roles"],
    UserInvitationsType: ["user_invitations"],
    UsersType: ["users"],
  },
  oneOfMap: {
    UserResponseIncludedItem: ["Organization", "Permission", "Role"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    Organization: Organization,
    OrganizationAttributes: OrganizationAttributes,
    Pagination: Pagination,
    Permission: Permission,
    PermissionAttributes: PermissionAttributes,
    PermissionsResponse: PermissionsResponse,
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
    ResponseMetaAttributes: ResponseMetaAttributes,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    User: User,
    UserAttributes: UserAttributes,
    UserCreateAttributes: UserCreateAttributes,
    UserCreateData: UserCreateData,
    UserCreateRequest: UserCreateRequest,
    UserInvitationData: UserInvitationData,
    UserInvitationDataAttributes: UserInvitationDataAttributes,
    UserInvitationRelationships: UserInvitationRelationships,
    UserInvitationResponse: UserInvitationResponse,
    UserInvitationResponseData: UserInvitationResponseData,
    UserInvitationsRequest: UserInvitationsRequest,
    UserInvitationsResponse: UserInvitationsResponse,
    UserRelationships: UserRelationships,
    UserResponse: UserResponse,
    UserResponseRelationships: UserResponseRelationships,
    UserUpdateAttributes: UserUpdateAttributes,
    UserUpdateData: UserUpdateData,
    UserUpdateRequest: UserUpdateRequest,
    UsersResponse: UsersResponse,
  },
};
