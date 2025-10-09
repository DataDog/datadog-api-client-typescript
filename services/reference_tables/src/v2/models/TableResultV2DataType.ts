import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Reference table resource type.
 */
export type TableResultV2DataType = typeof REFERENCE_TABLE | UnparsedObject;
export const REFERENCE_TABLE = "reference_table";
