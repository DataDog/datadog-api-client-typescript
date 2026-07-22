import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource limit resource type.
 */
export type GovernanceResourceLimitResourceType =
  | typeof RESOURCE_LIMIT
  | UnparsedObject;
export const RESOURCE_LIMIT = "resource-limit";
