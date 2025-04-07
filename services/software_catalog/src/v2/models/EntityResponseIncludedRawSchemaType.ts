import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Raw schema type.
 */
export type EntityResponseIncludedRawSchemaType =
  | typeof RAW_SCHEMA
  | UnparsedObject;
export const RAW_SCHEMA = "rawSchema";
