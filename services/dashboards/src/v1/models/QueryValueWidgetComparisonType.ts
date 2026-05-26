import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * How the delta is expressed: `absolute` (raw difference), `relative` (percentage), or `both`.
 */
export type QueryValueWidgetComparisonType =
  | typeof ABSOLUTE
  | typeof RELATIVE
  | typeof BOTH
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const RELATIVE = "relative";
export const BOTH = "both";
