import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Supported include types for relations.
 */
export type RelationIncludeType =
  | typeof ENTITY
  | typeof SCHEMA
  | UnparsedObject;
export const ENTITY = "entity";
export const SCHEMA = "schema";
