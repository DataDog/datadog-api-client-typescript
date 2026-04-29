import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type of a label in an annotation queue label schema.
 */
export type LLMObsLabelSchemaType =
  | typeof SCORE
  | typeof CATEGORICAL
  | typeof BOOLEAN
  | typeof TEXT
  | UnparsedObject;
export const SCORE = "score";
export const CATEGORICAL = "categorical";
export const BOOLEAN = "boolean";
export const TEXT = "text";
