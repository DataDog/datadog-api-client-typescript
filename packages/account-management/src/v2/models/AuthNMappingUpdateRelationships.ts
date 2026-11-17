import { UnparsedObject } from "@datadog/datadog-api-client-core";

import { AuthNMappingRelationshipToRole } from "./AuthNMappingRelationshipToRole";
import { AuthNMappingRelationshipToTeam } from "./AuthNMappingRelationshipToTeam";

/**
 * Relationship of AuthN Mapping update object to a Role or Team.
 */
export type AuthNMappingUpdateRelationships =
  | AuthNMappingRelationshipToRole
  | AuthNMappingRelationshipToTeam
  | UnparsedObject;
