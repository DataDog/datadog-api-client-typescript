import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Specifies the tenant-based handle resource type.
 */
export type MicrosoftTeamsTenantBasedHandleType =
  | typeof TENANT_BASED_HANDLE
  | UnparsedObject;
export const TENANT_BASED_HANDLE = "tenant-based-handle";
