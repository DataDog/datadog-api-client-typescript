import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Data capture configurations resource type.
 */
export type AiGatewayCaptureConfigurationResponseDataType =
  | typeof DATA_CAPTURE_CONFIGURATIONS
  | UnparsedObject;
export const DATA_CAPTURE_CONFIGURATIONS = "data-capture-configurations";
