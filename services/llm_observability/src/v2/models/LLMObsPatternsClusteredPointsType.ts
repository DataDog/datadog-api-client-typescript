import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability patterns clustered points response.
 */
export type LLMObsPatternsClusteredPointsType =
  | typeof CLUSTERED_POINTS_RESPONSE
  | UnparsedObject;
export const CLUSTERED_POINTS_RESPONSE = "clustered_points_response";
