import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The discriminator identifying a target selected by index.
 */
export type ProductAnalyticsRetentionIndexTargetType =
  | typeof INDEX
  | UnparsedObject;
export const INDEX = "index";
