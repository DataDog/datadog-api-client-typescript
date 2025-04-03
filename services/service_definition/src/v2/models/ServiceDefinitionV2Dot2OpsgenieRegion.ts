import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Opsgenie instance region.
 */
export type ServiceDefinitionV2Dot2OpsgenieRegion =
  | typeof US
  | typeof EU
  | UnparsedObject;
export const US = "US";
export const EU = "EU";
