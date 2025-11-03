import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Schema resource type.
 */
export type EntityResponseDataRelationshipsSchemaDataType =
  | typeof SCHEMA
  | UnparsedObject;
export const SCHEMA = "schema";
