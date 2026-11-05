import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Controls whether AI Gateway captures request and response content in addition to metadata.
 */
export type AiGatewayDataCaptureMode =
  | typeof METADATA_ONLY
  | typeof FULL_CAPTURE
  | UnparsedObject;
export const METADATA_ONLY = "metadata_only";
export const FULL_CAPTURE = "full_capture";
