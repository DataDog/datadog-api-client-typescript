import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `google_pubsub`.
 */
export type ObservabilityPipelineGooglePubSubDestinationType =
  | typeof GOOGLE_PUBSUB
  | UnparsedObject;
export const GOOGLE_PUBSUB = "google_pubsub";
