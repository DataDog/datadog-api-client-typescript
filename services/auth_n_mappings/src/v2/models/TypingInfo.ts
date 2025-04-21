import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { AuthNMapping } from "./AuthNMapping";
import { AuthNMappingAttributes } from "./AuthNMappingAttributes";
import { AuthNMappingCreateAttributes } from "./AuthNMappingCreateAttributes";
import { AuthNMappingCreateData } from "./AuthNMappingCreateData";
import { AuthNMappingCreateRequest } from "./AuthNMappingCreateRequest";
import { AuthNMappingRelationshipToRole } from "./AuthNMappingRelationshipToRole";
import { AuthNMappingRelationshipToTeam } from "./AuthNMappingRelationshipToTeam";
import { AuthNMappingRelationships } from "./AuthNMappingRelationships";
import { AuthNMappingResponse } from "./AuthNMappingResponse";
import { AuthNMappingTeam } from "./AuthNMappingTeam";
import { AuthNMappingTeamAttributes } from "./AuthNMappingTeamAttributes";
import { AuthNMappingUpdateAttributes } from "./AuthNMappingUpdateAttributes";
import { AuthNMappingUpdateData } from "./AuthNMappingUpdateData";
import { AuthNMappingUpdateRequest } from "./AuthNMappingUpdateRequest";
import { AuthNMappingsResponse } from "./AuthNMappingsResponse";
import { Pagination } from "./Pagination";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToSAMLAssertionAttribute } from "./RelationshipToSAMLAssertionAttribute";
import { RelationshipToSAMLAssertionAttributeData } from "./RelationshipToSAMLAssertionAttributeData";
import { RelationshipToTeam } from "./RelationshipToTeam";
import { RelationshipToTeamData } from "./RelationshipToTeamData";
import { ResponseMetaAttributes } from "./ResponseMetaAttributes";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { SAMLAssertionAttribute } from "./SAMLAssertionAttribute";
import { SAMLAssertionAttributeAttributes } from "./SAMLAssertionAttributeAttributes";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    AuthNMappingResourceType: ["role", "team"],
    AuthNMappingsSort: [
      "created_at",
      "-created_at",
      "role_id",
      "-role_id",
      "saml_assertion_attribute_id",
      "-saml_assertion_attribute_id",
      "role.name",
      "-role.name",
      "saml_assertion_attribute.attribute_key",
      "-saml_assertion_attribute.attribute_key",
      "saml_assertion_attribute.attribute_value",
      "-saml_assertion_attribute.attribute_value",
    ],
    AuthNMappingsType: ["authn_mappings"],
    PermissionsType: ["permissions"],
    RolesType: ["roles"],
    SAMLAssertionAttributesType: ["saml_assertion_attributes"],
    TeamType: ["team"],
  },
  oneOfMap: {
    AuthNMappingCreateRelationships: [
      "AuthNMappingRelationshipToRole",
      "AuthNMappingRelationshipToTeam",
    ],
    AuthNMappingIncluded: [
      "SAMLAssertionAttribute",
      "Role",
      "AuthNMappingTeam",
    ],
    AuthNMappingUpdateRelationships: [
      "AuthNMappingRelationshipToRole",
      "AuthNMappingRelationshipToTeam",
    ],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    AuthNMapping: AuthNMapping,
    AuthNMappingAttributes: AuthNMappingAttributes,
    AuthNMappingCreateAttributes: AuthNMappingCreateAttributes,
    AuthNMappingCreateData: AuthNMappingCreateData,
    AuthNMappingCreateRequest: AuthNMappingCreateRequest,
    AuthNMappingRelationshipToRole: AuthNMappingRelationshipToRole,
    AuthNMappingRelationshipToTeam: AuthNMappingRelationshipToTeam,
    AuthNMappingRelationships: AuthNMappingRelationships,
    AuthNMappingResponse: AuthNMappingResponse,
    AuthNMappingTeam: AuthNMappingTeam,
    AuthNMappingTeamAttributes: AuthNMappingTeamAttributes,
    AuthNMappingUpdateAttributes: AuthNMappingUpdateAttributes,
    AuthNMappingUpdateData: AuthNMappingUpdateData,
    AuthNMappingUpdateRequest: AuthNMappingUpdateRequest,
    AuthNMappingsResponse: AuthNMappingsResponse,
    Pagination: Pagination,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRole: RelationshipToRole,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToSAMLAssertionAttribute: RelationshipToSAMLAssertionAttribute,
    RelationshipToSAMLAssertionAttributeData:
      RelationshipToSAMLAssertionAttributeData,
    RelationshipToTeam: RelationshipToTeam,
    RelationshipToTeamData: RelationshipToTeamData,
    ResponseMetaAttributes: ResponseMetaAttributes,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    SAMLAssertionAttribute: SAMLAssertionAttribute,
    SAMLAssertionAttributeAttributes: SAMLAssertionAttributeAttributes,
  },
};
