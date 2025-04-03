import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The region for the Opsgenie service.
 */
export type OpsgenieServiceRegionType =
  | typeof US
  | typeof EU
  | typeof CUSTOM
  | UnparsedObject;
export const US = "us";
export const EU = "eu";
export const CUSTOM = "custom";
