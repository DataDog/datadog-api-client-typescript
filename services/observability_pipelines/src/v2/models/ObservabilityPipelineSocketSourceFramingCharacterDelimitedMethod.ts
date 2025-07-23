import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Byte frames which are delimited by a chosen character.
 */
export type ObservabilityPipelineSocketSourceFramingCharacterDelimitedMethod =
  | typeof CHARACTER_DELIMITED
  | UnparsedObject;
export const CHARACTER_DELIMITED = "character_delimited";
