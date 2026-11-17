import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The discriminator identifying a target that references a range of steps.
 */
export type ProductAnalyticsJourneyPathTargetType =
  | typeof PATH
  | UnparsedObject;
export const PATH = "path";
