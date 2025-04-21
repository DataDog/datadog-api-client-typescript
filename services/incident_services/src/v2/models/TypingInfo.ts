import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { IncidentResponseMeta } from "./IncidentResponseMeta";
import { IncidentResponseMetaPagination } from "./IncidentResponseMetaPagination";
import { IncidentServiceCreateAttributes } from "./IncidentServiceCreateAttributes";
import { IncidentServiceCreateData } from "./IncidentServiceCreateData";
import { IncidentServiceCreateRequest } from "./IncidentServiceCreateRequest";
import { IncidentServiceRelationships } from "./IncidentServiceRelationships";
import { IncidentServiceResponse } from "./IncidentServiceResponse";
import { IncidentServiceResponseAttributes } from "./IncidentServiceResponseAttributes";
import { IncidentServiceResponseData } from "./IncidentServiceResponseData";
import { IncidentServiceUpdateAttributes } from "./IncidentServiceUpdateAttributes";
import { IncidentServiceUpdateData } from "./IncidentServiceUpdateData";
import { IncidentServiceUpdateRequest } from "./IncidentServiceUpdateRequest";
import { IncidentServicesResponse } from "./IncidentServicesResponse";
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
    IncidentServiceType: ["services"],
    OrganizationsType: ["orgs"],
    RolesType: ["roles"],
    UsersType: ["users"],
  },
  oneOfMap: {
    IncidentServiceIncludedItems: ["User"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    IncidentResponseMeta: IncidentResponseMeta,
    IncidentResponseMetaPagination: IncidentResponseMetaPagination,
    IncidentServiceCreateAttributes: IncidentServiceCreateAttributes,
    IncidentServiceCreateData: IncidentServiceCreateData,
    IncidentServiceCreateRequest: IncidentServiceCreateRequest,
    IncidentServiceRelationships: IncidentServiceRelationships,
    IncidentServiceResponse: IncidentServiceResponse,
    IncidentServiceResponseAttributes: IncidentServiceResponseAttributes,
    IncidentServiceResponseData: IncidentServiceResponseData,
    IncidentServiceUpdateAttributes: IncidentServiceUpdateAttributes,
    IncidentServiceUpdateData: IncidentServiceUpdateData,
    IncidentServiceUpdateRequest: IncidentServiceUpdateRequest,
    IncidentServicesResponse: IncidentServicesResponse,
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
