import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Reference table resource type.
 */
export type PatchTableRequestDataType = typeof REFERENCE_TABLE | UnparsedObject;
export const REFERENCE_TABLE = "reference_table";
