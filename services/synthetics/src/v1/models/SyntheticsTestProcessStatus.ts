import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Status of a Synthetic test.
 */
export type SyntheticsTestProcessStatus =
  | typeof NOT_SCHEDULED
  | typeof SCHEDULED
  | typeof FINISHED
  | typeof FINISHED_WITH_ERROR
  | UnparsedObject;
export const NOT_SCHEDULED = "not_scheduled";
export const SCHEDULED = "scheduled";
export const FINISHED = "finished";
export const FINISHED_WITH_ERROR = "finished_with_error";
