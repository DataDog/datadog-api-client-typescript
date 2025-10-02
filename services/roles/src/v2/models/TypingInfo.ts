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
import { RelationshipToPermission } from "./RelationshipToPermission";
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
import { RoleClone } from "./RoleClone";
import { RoleCloneAttributes } from "./RoleCloneAttributes";
import { RoleCloneRequest } from "./RoleCloneRequest";
import { RoleCreateAttributes } from "./RoleCreateAttributes";
import { RoleCreateData } from "./RoleCreateData";
import { RoleCreateRequest } from "./RoleCreateRequest";
import { RoleCreateResponse } from "./RoleCreateResponse";
import { RoleCreateResponseData } from "./RoleCreateResponseData";
import { RoleRelationships } from "./RoleRelationships";
import { RoleResponse } from "./RoleResponse";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { RoleTemplateArray } from "./RoleTemplateArray";
import { RoleTemplateData } from "./RoleTemplateData";
import { RoleTemplateDataAttributes } from "./RoleTemplateDataAttributes";
import { RoleUpdateAttributes } from "./RoleUpdateAttributes";
import { RoleUpdateData } from "./RoleUpdateData";
import { RoleUpdateRequest } from "./RoleUpdateRequest";
import { RoleUpdateResponse } from "./RoleUpdateResponse";
import { RoleUpdateResponseData } from "./RoleUpdateResponseData";
import { RolesResponse } from "./RolesResponse";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";
import { UsersResponse } from "./UsersResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    OrganizationsType: ["orgs"],
    PermissionsType: ["permissions"],
    RoleTemplateDataType: ["roles"],
    RolesSort: [
      "name",
      "-name",
      "modified_at",
      "-modified_at",
      "user_count",
      "-user_count",
    ],
    RolesType: ["roles"],
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
    RelationshipToPermission: RelationshipToPermission,
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
    RoleClone: RoleClone,
    RoleCloneAttributes: RoleCloneAttributes,
    RoleCloneRequest: RoleCloneRequest,
    RoleCreateAttributes: RoleCreateAttributes,
    RoleCreateData: RoleCreateData,
    RoleCreateRequest: RoleCreateRequest,
    RoleCreateResponse: RoleCreateResponse,
    RoleCreateResponseData: RoleCreateResponseData,
    RoleRelationships: RoleRelationships,
    RoleResponse: RoleResponse,
    RoleResponseRelationships: RoleResponseRelationships,
    RoleTemplateArray: RoleTemplateArray,
    RoleTemplateData: RoleTemplateData,
    RoleTemplateDataAttributes: RoleTemplateDataAttributes,
    RoleUpdateAttributes: RoleUpdateAttributes,
    RoleUpdateData: RoleUpdateData,
    RoleUpdateRequest: RoleUpdateRequest,
    RoleUpdateResponse: RoleUpdateResponse,
    RoleUpdateResponseData: RoleUpdateResponseData,
    RolesResponse: RolesResponse,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
    UsersResponse: UsersResponse,
  },
};
