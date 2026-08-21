import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for cross-queue annotated interactions lookup.
 */
export type LLMObsAnnotatedInteractionsByTraceType =
  | typeof ANNOTATED_INTERACTIONS_BY_TRACE
  | UnparsedObject;
export const ANNOTATED_INTERACTIONS_BY_TRACE =
  "annotated_interactions_by_trace";
