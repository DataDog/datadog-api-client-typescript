import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Type discriminator for a `display_block` interaction.
 */
export type LLMObsDisplayBlockInteractionType =
  | typeof DISPLAY_BLOCK
  | UnparsedObject;
export const DISPLAY_BLOCK = "display_block";
