import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Capture mode for matching traffic.
 */
export type AiGatewayCaptureCreateRequestDataAttributesMode =
  | typeof METADATA_ONLY
  | typeof FULL_CAPTURE
  | UnparsedObject;
export const METADATA_ONLY = "metadata_only";
export const FULL_CAPTURE = "full_capture";
