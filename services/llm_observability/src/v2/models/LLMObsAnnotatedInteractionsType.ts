import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Resource type for annotated interactions.
 */
export type LLMObsAnnotatedInteractionsType =
  | typeof ANNOTATED_INTERACTIONS
  | UnparsedObject;
export const ANNOTATED_INTERACTIONS = "annotated_interactions";
