import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `subscription_requests`.
 */
export type SampleLogGenerationSubscriptionRequestType =
  | typeof SUBSCRIPTION_REQUESTS
  | UnparsedObject;
export const SUBSCRIPTION_REQUESTS = "subscription_requests";
