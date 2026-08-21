import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The discriminator identifying a target that references a single step.
 */
export type ProductAnalyticsJourneyNodeTargetType =
  | typeof NODE
  | UnparsedObject;
export const NODE = "node";
