import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Describes the relationship between the span, its parents, and its children in a trace.
 */
export type FormulaAndFunctionApmMetricsSpanKind =
  | typeof CONSUMER
  | typeof SERVER
  | typeof CLIENT
  | typeof PRODUCER
  | typeof INTERNAL
  | UnparsedObject;
export const CONSUMER = "consumer";
export const SERVER = "server";
export const CLIENT = "client";
export const PRODUCER = "producer";
export const INTERNAL = "internal";
