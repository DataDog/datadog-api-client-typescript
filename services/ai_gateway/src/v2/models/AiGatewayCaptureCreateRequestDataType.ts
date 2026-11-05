import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data capture overrides resource type.
 */
export type AiGatewayCaptureCreateRequestDataType =
  | typeof DATA_CAPTURE_OVERRIDES
  | UnparsedObject;
export const DATA_CAPTURE_OVERRIDES = "data-capture-overrides";
