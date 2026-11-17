import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Raw schema type.
 */
export type EntityResponseIncludedRawSchemaType =
  | typeof RAW_SCHEMA
  | UnparsedObject;
export const RAW_SCHEMA = "rawSchema";
