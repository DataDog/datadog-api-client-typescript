import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Test-only generated schema for the dashboard versioning proof of concept.
 */
export type MessageDisplay =
  | typeof INLINE
  | typeof EXPANDED_MD
  | typeof EXPANDED_LG
  | UnparsedObject;
export const INLINE = "inline";
export const EXPANDED_MD = "expanded-md";
export const EXPANDED_LG = "expanded-lg";
