import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * When to count updatable events. `match` when the event is first seen, or `end` when the event is complete. Sessions and views are updated over time, each one is counted once.
 */
export type RumMetricUniquenessWhen =
  | typeof WHEN_MATCH
  | typeof WHEN_END
  | UnparsedObject;
export const WHEN_MATCH = "match";
export const WHEN_END = "end";
