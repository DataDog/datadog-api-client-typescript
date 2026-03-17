import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The source of a segment.
 */
export type RumSegmentSource =
  | typeof USER_CREATED
  | typeof INITIAL
  | UnparsedObject;
export const USER_CREATED = "user_created";
export const INITIAL = "initial";
