import { UnparsedObject } from "@datadog/datadog-api-client-core";

/**
 * Response format for the scalar formula request. Only `scalar` is supported.
 */
export type HostMapWidgetScalarRequestResponseFormat =
  | typeof SCALAR
  | UnparsedObject;
export const SCALAR = "scalar";
