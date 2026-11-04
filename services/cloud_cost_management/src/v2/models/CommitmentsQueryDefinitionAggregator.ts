import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reducer a scalar widget applies to the query.
 */
export type CommitmentsQueryDefinitionAggregator =
  | typeof SUM
  | typeof AVG
  | typeof MIN
  | typeof MAX
  | UnparsedObject;
export const SUM = "sum";
export const AVG = "avg";
export const MIN = "min";
export const MAX = "max";
