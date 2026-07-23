import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type for Application Security content pack details.
 */
export type SecurityMonitoringContentPackAppSecDetailsType =
  | typeof APPSEC
  | UnparsedObject;
export const APPSEC = "appsec";
