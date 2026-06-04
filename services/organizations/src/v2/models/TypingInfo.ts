import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { JSONAPIErrorItem } from "./JSONAPIErrorItem";
import { JSONAPIErrorItemSource } from "./JSONAPIErrorItemSource";
import { JSONAPIErrorResponse } from "./JSONAPIErrorResponse";
import { ManagedOrgsData } from "./ManagedOrgsData";
import { ManagedOrgsRelationshipToOrg } from "./ManagedOrgsRelationshipToOrg";
import { ManagedOrgsRelationshipToOrgs } from "./ManagedOrgsRelationshipToOrgs";
import { ManagedOrgsRelationships } from "./ManagedOrgsRelationships";
import { ManagedOrgsResponse } from "./ManagedOrgsResponse";
import { OrgAttributes } from "./OrgAttributes";
import { OrgConfigGetResponse } from "./OrgConfigGetResponse";
import { OrgConfigListResponse } from "./OrgConfigListResponse";
import { OrgConfigRead } from "./OrgConfigRead";
import { OrgConfigReadAttributes } from "./OrgConfigReadAttributes";
import { OrgConfigWrite } from "./OrgConfigWrite";
import { OrgConfigWriteAttributes } from "./OrgConfigWriteAttributes";
import { OrgConfigWriteRequest } from "./OrgConfigWriteRequest";
import { OrgData } from "./OrgData";
import { OrgRelationshipData } from "./OrgRelationshipData";
import { OrgSAMLPreferencesAttributes } from "./OrgSAMLPreferencesAttributes";
import { OrgSAMLPreferencesData } from "./OrgSAMLPreferencesData";
import { OrgSAMLPreferencesUpdateRequest } from "./OrgSAMLPreferencesUpdateRequest";
import { RelationshipToPermissionData } from "./RelationshipToPermissionData";
import { RelationshipToPermissions } from "./RelationshipToPermissions";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { Role } from "./Role";
import { RoleAttributes } from "./RoleAttributes";
import { RoleResponseRelationships } from "./RoleResponseRelationships";
import { SAMLConfiguration } from "./SAMLConfiguration";
import { SAMLConfigurationAttributes } from "./SAMLConfigurationAttributes";
import { SAMLConfigurationRelationships } from "./SAMLConfigurationRelationships";
import { SAMLConfigurationResponse } from "./SAMLConfigurationResponse";
import { SAMLConfigurationUpdateAttributes } from "./SAMLConfigurationUpdateAttributes";
import { SAMLConfigurationUpdateData } from "./SAMLConfigurationUpdateData";
import { SAMLConfigurationUpdateRequest } from "./SAMLConfigurationUpdateRequest";
import { SAMLConfigurationsResponse } from "./SAMLConfigurationsResponse";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    ManagedOrgsType: ["managed_orgs"],
    OrgConfigType: ["org_configs"],
    OrgResourceType: ["orgs"],
    OrgSAMLPreferencesType: ["saml_preferences"],
    PermissionsType: ["permissions"],
    RolesType: ["roles"],
    SAMLConfigurationsType: ["saml_configurations"],
  },
  oneOfMap: {},
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    JSONAPIErrorItem: JSONAPIErrorItem,
    JSONAPIErrorItemSource: JSONAPIErrorItemSource,
    JSONAPIErrorResponse: JSONAPIErrorResponse,
    ManagedOrgsData: ManagedOrgsData,
    ManagedOrgsRelationshipToOrg: ManagedOrgsRelationshipToOrg,
    ManagedOrgsRelationshipToOrgs: ManagedOrgsRelationshipToOrgs,
    ManagedOrgsRelationships: ManagedOrgsRelationships,
    ManagedOrgsResponse: ManagedOrgsResponse,
    OrgAttributes: OrgAttributes,
    OrgConfigGetResponse: OrgConfigGetResponse,
    OrgConfigListResponse: OrgConfigListResponse,
    OrgConfigRead: OrgConfigRead,
    OrgConfigReadAttributes: OrgConfigReadAttributes,
    OrgConfigWrite: OrgConfigWrite,
    OrgConfigWriteAttributes: OrgConfigWriteAttributes,
    OrgConfigWriteRequest: OrgConfigWriteRequest,
    OrgData: OrgData,
    OrgRelationshipData: OrgRelationshipData,
    OrgSAMLPreferencesAttributes: OrgSAMLPreferencesAttributes,
    OrgSAMLPreferencesData: OrgSAMLPreferencesData,
    OrgSAMLPreferencesUpdateRequest: OrgSAMLPreferencesUpdateRequest,
    RelationshipToPermissionData: RelationshipToPermissionData,
    RelationshipToPermissions: RelationshipToPermissions,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    Role: Role,
    RoleAttributes: RoleAttributes,
    RoleResponseRelationships: RoleResponseRelationships,
    SAMLConfiguration: SAMLConfiguration,
    SAMLConfigurationAttributes: SAMLConfigurationAttributes,
    SAMLConfigurationRelationships: SAMLConfigurationRelationships,
    SAMLConfigurationResponse: SAMLConfigurationResponse,
    SAMLConfigurationUpdateAttributes: SAMLConfigurationUpdateAttributes,
    SAMLConfigurationUpdateData: SAMLConfigurationUpdateData,
    SAMLConfigurationUpdateRequest: SAMLConfigurationUpdateRequest,
    SAMLConfigurationsResponse: SAMLConfigurationsResponse,
  },
};
