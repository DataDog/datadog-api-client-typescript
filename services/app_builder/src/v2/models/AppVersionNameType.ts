import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The version-name resource type.
 */
export type AppVersionNameType = typeof VERSIONNAMES | UnparsedObject;
export const VERSIONNAMES = "versionNames";
