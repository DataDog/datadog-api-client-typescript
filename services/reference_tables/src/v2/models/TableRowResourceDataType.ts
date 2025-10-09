import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Row resource type.
 */
export type TableRowResourceDataType = typeof ROW | UnparsedObject;
export const ROW = "row";
