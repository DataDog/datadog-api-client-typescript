import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Permissions resource type.
 */
export type PermissionsType = typeof PERMISSIONS | UnparsedObject;
export const PERMISSIONS = "permissions";
