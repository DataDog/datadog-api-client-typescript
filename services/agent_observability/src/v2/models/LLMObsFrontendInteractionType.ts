import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type discriminator for a `frontend` interaction.
 */
export type LLMObsFrontendInteractionType = typeof FRONTEND | UnparsedObject;
export const FRONTEND = "frontend";
