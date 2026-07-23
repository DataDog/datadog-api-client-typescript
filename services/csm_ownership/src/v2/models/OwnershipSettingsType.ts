import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the ownership settings resource. The value should always be `ownership_settings`.
 */
export type OwnershipSettingsType = typeof OWNERSHIP_SETTINGS | UnparsedObject;
export const OWNERSHIP_SETTINGS = "ownership_settings";
