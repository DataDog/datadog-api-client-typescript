import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";
import { IncidentTeamCreateAttributes } from "./IncidentTeamCreateAttributes";
import { IncidentTeamCreateData } from "./IncidentTeamCreateData";
import { IncidentTeamCreateRequest } from "./IncidentTeamCreateRequest";
import { IncidentTeamRelationships } from "./IncidentTeamRelationships";
import { IncidentTeamResponse } from "./IncidentTeamResponse";
import { IncidentTeamResponseAttributes } from "./IncidentTeamResponseAttributes";
import { IncidentTeamResponseData } from "./IncidentTeamResponseData";
import { IncidentTeamUpdateAttributes } from "./IncidentTeamUpdateAttributes";
import { IncidentTeamUpdateData } from "./IncidentTeamUpdateData";
import { IncidentTeamUpdateRequest } from "./IncidentTeamUpdateRequest";
import { IncidentTeamsResponse } from "./IncidentTeamsResponse";
import { RelationshipToOrganization } from "./RelationshipToOrganization";
import { RelationshipToOrganizationData } from "./RelationshipToOrganizationData";
import { RelationshipToOrganizations } from "./RelationshipToOrganizations";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RelationshipToUser } from "./RelationshipToUser";
import { RelationshipToUserData } from "./RelationshipToUserData";
import { RelationshipToUsers } from "./RelationshipToUsers";
import { User } from "./User";
import { UserAttributes } from "./UserAttributes";
import { UserResponseRelationships } from "./UserResponseRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    IncidentRelatedObject: ["users", "attachments"],
    IncidentTeamType: ["teams"],
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    IncidentTeamIncludedItems: ["User"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IncidentResponseMeta: IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination,
    IncidentTeamCreateAttributes: IncidentTeamCreateAttributes,
    IncidentTeamCreateData: IncidentTeamCreateData,
    IncidentTeamCreateRequest: IncidentTeamCreateRequest,
    IncidentTeamRelationships: IncidentTeamRelationships,
    IncidentTeamResponse: IncidentTeamResponse,
    IncidentTeamResponseAttributes: IncidentTeamResponseAttributes,
    IncidentTeamResponseData: IncidentTeamResponseData,
    IncidentTeamUpdateAttributes: IncidentTeamUpdateAttributes,
    IncidentTeamUpdateData: IncidentTeamUpdateData,
    IncidentTeamUpdateRequest: IncidentTeamUpdateRequest,
    IncidentTeamsResponse: IncidentTeamsResponse,
    RelationshipToOrganization: RelationshipToOrganization,
    RelationshipToOrganizationData: RelationshipToOrganizationData,
    RelationshipToOrganizations: RelationshipToOrganizations,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RelationshipToUser: RelationshipToUser,
    RelationshipToUserData: RelationshipToUserData,
    RelationshipToUsers: RelationshipToUsers,
    User: User,
    UserAttributes: UserAttributes,
    UserResponseRelationships: UserResponseRelationships,
  },
};
