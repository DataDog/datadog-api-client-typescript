import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * The type of the resource. The value should always be `subscriptions`.
 */
export type SampleLogGenerationSubscriptionResourceType =
  | typeof SUBSCRIPTIONS
  | UnparsedObject;
export const SUBSCRIPTIONS = "subscriptions";
