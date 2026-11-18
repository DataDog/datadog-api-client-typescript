import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The JSON:API resource type for a fleet access scope.
 */
export type FleetAccessScopeResourceType = typeof ACCESS_SCOPE | UnparsedObject;
export const ACCESS_SCOPE = "access_scope";
