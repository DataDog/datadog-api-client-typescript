import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The subtype of the Synthetic multi-step API test step.
 */
export type SyntheticsAPITestStepSubtype =
  | typeof HTTP
  | typeof GRPC
  | UnparsedObject;
export const HTTP = "http";
export const GRPC = "grpc";
