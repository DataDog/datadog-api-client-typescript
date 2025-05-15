import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source type. The value should always be `google_pubsub`.
 */
export type ObservabilityPipelineGooglePubSubSourceType =
  | typeof GOOGLE_PUBSUB
  | UnparsedObject;
export const GOOGLE_PUBSUB = "google_pubsub";
