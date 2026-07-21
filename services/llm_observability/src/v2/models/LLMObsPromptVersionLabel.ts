import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * A label attached to an LLM Observability prompt version.
 */
export type LLMObsPromptVersionLabel =
  | typeof PRODUCTION
  | typeof DEVELOPMENT
  | UnparsedObject;
export const PRODUCTION = "production";
export const DEVELOPMENT = "development";
