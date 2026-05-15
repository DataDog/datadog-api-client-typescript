import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The column type. "group" for dimension columns, "number" for metric columns.
 */
export type CommitmentsScalarColumnType =
  | typeof GROUP
  | typeof NUMBER
  | UnparsedObject;
export const GROUP = "group";
export const NUMBER = "number";
