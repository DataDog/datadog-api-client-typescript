import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the column in a dataset definition.
 */
export type SecurityMonitoringDatasetDefinitionColumnType =
  | typeof STRING
  | typeof INTEGER
  | typeof DOUBLE
  | typeof BOOLEAN
  | UnparsedObject;
export const STRING = "string";
export const INTEGER = "integer";
export const DOUBLE = "double";
export const BOOLEAN = "boolean";
