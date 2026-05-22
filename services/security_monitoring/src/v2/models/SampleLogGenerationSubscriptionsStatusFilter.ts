import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Filter that controls whether to return only active subscriptions or every subscription on record.
 */
export type SampleLogGenerationSubscriptionsStatusFilter =
  | typeof ACTIVE
  | typeof ALL
  | UnparsedObject;
export const ACTIVE = "active";
export const ALL = "all";
