import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Roles resource type.
 */
export type RoleTemplateDataType = typeof ROLES | UnparsedObject;
export const ROLES = "roles";
