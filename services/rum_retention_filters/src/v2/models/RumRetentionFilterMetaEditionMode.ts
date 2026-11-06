import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Which attributes of the retention filter can be edited. `complete`: all attributes can be edited. `limited`: only the sample rates can be edited; the name, event type, and query are fixed and the filter cannot be reordered (for example, default filters). `unknown`: the edition mode is not set.
 */
export type RumRetentionFilterMetaEditionMode =
  | typeof UNKNOWN
  | typeof COMPLETE
  | typeof LIMITED
  | UnparsedObject;
export const UNKNOWN = "unknown";
export const COMPLETE = "complete";
export const LIMITED = "limited";
