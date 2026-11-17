import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type for annotated interactions.
 */
export type LLMObsAnnotatedInteractionsType =
  | typeof ANNOTATED_INTERACTIONS
  | UnparsedObject;
export const ANNOTATED_INTERACTIONS = "annotated_interactions";
