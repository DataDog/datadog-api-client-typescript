import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of resource. The value should always be aggregate_request.
 */
export type SpansAggregateRequestType =
  | typeof AGGREGATE_REQUEST
  | UnparsedObject;
export const AGGREGATE_REQUEST = "aggregate_request";
