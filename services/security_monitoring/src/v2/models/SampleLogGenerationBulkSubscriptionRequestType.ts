import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The type of the resource. The value should always be `bulk_subscription_requests`.
 */
export type SampleLogGenerationBulkSubscriptionRequestType =
  | typeof BULK_SUBSCRIPTION_REQUESTS
  | UnparsedObject;
export const BULK_SUBSCRIPTION_REQUESTS = "bulk_subscription_requests";
