import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value must be `databricks_zerobus`.
 */
export type ObservabilityPipelineDatabricksZerobusDestinationType =
  | typeof DATABRICKS_ZEROBUS
  | UnparsedObject;
export const DATABRICKS_ZEROBUS = "databricks_zerobus";
