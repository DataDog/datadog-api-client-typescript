import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs schema category mapper.
 */
export type LogsSchemaCategoryMapperType =
  | typeof SCHEMA_CATEGORY_MAPPER
  | UnparsedObject;
export const SCHEMA_CATEGORY_MAPPER = "schema-category-mapper";
