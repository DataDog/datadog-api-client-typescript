import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type of an LLM Observability patterns topics-with-clustered-points response.
 */
export type LLMObsPatternsTopicsWithClusteredPointsType =
  | typeof GET_TOPICS_WITH_CLUSTER_POINTS_RESPONSE
  | UnparsedObject;
export const GET_TOPICS_WITH_CLUSTER_POINTS_RESPONSE =
  "get_topics_with_cluster_points_response";
