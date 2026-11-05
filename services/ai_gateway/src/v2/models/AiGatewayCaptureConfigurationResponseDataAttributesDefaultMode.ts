import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Default capture mode for the organization. Change it in **Org defaults**.
 */
export type AiGatewayCaptureConfigurationResponseDataAttributesDefaultMode =
  | typeof METADATA_ONLY
  | typeof FULL_CAPTURE
  | UnparsedObject;
export const METADATA_ONLY = "metadata_only";
export const FULL_CAPTURE = "full_capture";
