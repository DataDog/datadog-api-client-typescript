import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Schema versions
 */
export type ServiceDefinitionSchemaVersions =
  | typeof V1
  | typeof V2
  | typeof V2_1
  | typeof V2_2
  | UnparsedObject;
export const V1 = "v1";
export const V2 = "v2";
export const V2_1 = "v2.1";
export const V2_2 = "v2.2";
