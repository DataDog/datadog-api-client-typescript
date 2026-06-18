import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The reference point from which the due date is calculated. When `fix_available` is selected but not applicable to the finding type, `first_seen` is used instead.
 */
export type DueDateFrom =
  | typeof FIRST_SEEN
  | typeof FIX_AVAILABLE
  | UnparsedObject;
export const FIRST_SEEN = "first_seen";
export const FIX_AVAILABLE = "fix_available";
