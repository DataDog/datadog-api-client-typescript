import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * (deprecated) The attribute formerly used to group elements in the widget.
 */
export type TreeMapGroupBy =
  | typeof USER
  | typeof FAMILY
  | typeof PROCESS
  | UnparsedObject;
export const USER = "user";
export const FAMILY = "family";
export const PROCESS = "process";
