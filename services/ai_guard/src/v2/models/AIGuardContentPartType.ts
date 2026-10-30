import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the content part.
 */
export type AIGuardContentPartType =
  | typeof TEXT
  | typeof IMAGE_URL
  | UnparsedObject;
export const TEXT = "text";
export const IMAGE_URL = "image_url";
