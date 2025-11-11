import { ModelTypingInfo } from "@datadog/datadog-api-client";

import { APIErrorResponse } from "./APIErrorResponse";
import { RelationshipToRole } from "./RelationshipToRole";
import { RelationshipToRoleData } from "./RelationshipToRoleData";
import { RelationshipToRoles } from "./RelationshipToRoles";
import { RestrictionQueryAttributes } from "./RestrictionQueryAttributes";
import { RestrictionQueryCreateAttributes } from "./RestrictionQueryCreateAttributes";
import { RestrictionQueryCreateData } from "./RestrictionQueryCreateData";
import { RestrictionQueryCreatePayload } from "./RestrictionQueryCreatePayload";
import { RestrictionQueryListResponse } from "./RestrictionQueryListResponse";
import { RestrictionQueryRole } from "./RestrictionQueryRole";
import { RestrictionQueryRoleAttribute } from "./RestrictionQueryRoleAttribute";
import { RestrictionQueryRolesResponse } from "./RestrictionQueryRolesResponse";
import { RestrictionQueryUpdateAttributes } from "./RestrictionQueryUpdateAttributes";
import { RestrictionQueryUpdateData } from "./RestrictionQueryUpdateData";
import { RestrictionQueryUpdatePayload } from "./RestrictionQueryUpdatePayload";
import { RestrictionQueryWithRelationships } from "./RestrictionQueryWithRelationships";
import { RestrictionQueryWithRelationshipsResponse } from "./RestrictionQueryWithRelationshipsResponse";
import { RestrictionQueryWithoutRelationships } from "./RestrictionQueryWithoutRelationships";
import { RestrictionQueryWithoutRelationshipsResponse } from "./RestrictionQueryWithoutRelationshipsResponse";
import { UserRelationships } from "./UserRelationships";

export const TypingInfo: ModelTypingInfo = {
  enumsMap: {
    LogsRestrictionQueriesType: ["logs_restriction_queries"],
    RolesType: ["roles"],
  },
  oneOfMap: {
    RestrictionQueryResponseIncludedItem: ["RestrictionQueryRole"],
  },
  typeMap: {
    APIErrorResponse: APIErrorResponse,
    RelationshipToRole: RelationshipToRole,
    RelationshipToRoleData: RelationshipToRoleData,
    RelationshipToRoles: RelationshipToRoles,
    RestrictionQueryAttributes: RestrictionQueryAttributes,
    RestrictionQueryCreateAttributes: RestrictionQueryCreateAttributes,
    RestrictionQueryCreateData: RestrictionQueryCreateData,
    RestrictionQueryCreatePayload: RestrictionQueryCreatePayload,
    RestrictionQueryListResponse: RestrictionQueryListResponse,
    RestrictionQueryRole: RestrictionQueryRole,
    RestrictionQueryRoleAttribute: RestrictionQueryRoleAttribute,
    RestrictionQueryRolesResponse: RestrictionQueryRolesResponse,
    RestrictionQueryUpdateAttributes: RestrictionQueryUpdateAttributes,
    RestrictionQueryUpdateData: RestrictionQueryUpdateData,
    RestrictionQueryUpdatePayload: RestrictionQueryUpdatePayload,
    RestrictionQueryWithRelationships: RestrictionQueryWithRelationships,
    RestrictionQueryWithRelationshipsResponse:
      RestrictionQueryWithRelationshipsResponse,
    RestrictionQueryWithoutRelationships: RestrictionQueryWithoutRelationships,
    RestrictionQueryWithoutRelationshipsResponse:
      RestrictionQueryWithoutRelationshipsResponse,
    UserRelationships: UserRelationships,
  },
};
