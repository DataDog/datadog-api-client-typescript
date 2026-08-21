import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for annotation queue interactions.
 */
export type LLMObsAnnotationQueueInteractionsType =
  | typeof INTERACTIONS
  | UnparsedObject;
export const INTERACTIONS = "interactions";
