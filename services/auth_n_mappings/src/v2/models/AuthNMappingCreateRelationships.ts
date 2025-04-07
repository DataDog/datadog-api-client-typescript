import { UnparsedObject } from "@datadog/datadog-api-client";

import { AuthNMappingRelationshipToRole } from "./AuthNMappingRelationshipToRole";
import { AuthNMappingRelationshipToTeam } from "./AuthNMappingRelationshipToTeam";

/**
 * Relationship of AuthN Mapping create object to a Role or Team.
 */
export type AuthNMappingCreateRelationships =
  | AuthNMappingRelationshipToRole
  | AuthNMappingRelationshipToTeam
  | UnparsedObject;
