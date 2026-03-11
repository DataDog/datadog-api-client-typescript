import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Entity schema version for conversion.
 */
export type EntitySchemaVersion =
  | typeof V2
  | typeof V2_1
  | typeof V2_2
  | typeof V3
  | UnparsedObject;
export const V2 = "v2";
export const V2_1 = "v2.1";
export const V2_2 = "v2.2";
export const V3 = "v3";
