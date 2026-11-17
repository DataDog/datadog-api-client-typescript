import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The app-version resource type.
 */
export type AppVersionType = typeof APPVERSIONS | UnparsedObject;
export const APPVERSIONS = "appVersions";
