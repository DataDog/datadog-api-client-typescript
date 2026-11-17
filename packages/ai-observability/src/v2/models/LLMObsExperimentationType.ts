import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Resource type for experimentation search and analytics operations.
 */
export type LLMObsExperimentationType = typeof EXPERIMENTATION | UnparsedObject;
export const EXPERIMENTATION = "experimentation";
