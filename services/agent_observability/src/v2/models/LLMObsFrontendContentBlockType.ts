import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type discriminator for a `frontend` display block.
 */
export type LLMObsFrontendContentBlockType = typeof FRONTEND | UnparsedObject;
export const FRONTEND = "frontend";
