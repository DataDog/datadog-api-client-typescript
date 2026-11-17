import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Type of logs schema remapper.
 */
export type LogsSchemaRemapperType = typeof SCHEMA_REMAPPER | UnparsedObject;
export const SCHEMA_REMAPPER = "schema-remapper";
