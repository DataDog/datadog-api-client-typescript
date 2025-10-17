import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of logs schema processor.
 */
export type LogsSchemaProcessorType = typeof SCHEMA_PROCESSOR | UnparsedObject;
export const SCHEMA_PROCESSOR = "schema-processor";
