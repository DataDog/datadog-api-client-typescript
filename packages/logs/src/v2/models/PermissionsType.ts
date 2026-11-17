import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Permissions resource type.
 */
export type PermissionsType = typeof PERMISSIONS | UnparsedObject;
export const PERMISSIONS = "permissions";
