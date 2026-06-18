import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A trace propagator type.
 */
export type RumSdkConfigTracingUrlPropagatorType =
  | typeof DATADOG
  | typeof B3
  | typeof B3MULTI
  | typeof TRACECONTEXT
  | UnparsedObject;
export const DATADOG = "datadog";
export const B3 = "b3";
export const B3MULTI = "b3multi";
export const TRACECONTEXT = "tracecontext";
