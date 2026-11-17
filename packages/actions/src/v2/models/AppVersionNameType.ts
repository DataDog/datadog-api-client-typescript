import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The version-name resource type.
 */
export type AppVersionNameType = typeof VERSIONNAMES | UnparsedObject;
export const VERSIONNAMES = "versionNames";
