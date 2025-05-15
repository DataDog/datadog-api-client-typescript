import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The destination type. The value should always be `google_chronicle`.
 */
export type ObservabilityPipelineGoogleChronicleDestinationType =
  | typeof GOOGLE_CHRONICLE
  | UnparsedObject;
export const GOOGLE_CHRONICLE = "google_chronicle";
