import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * The lifecycle to set. `ACTIVE` makes the flag temporary; `PERMANENT` excludes it from
 * staleness detection. Either value clears any snooze; omit the field to keep the lifecycle.
 * Do not copy the top-level `staleness_status` from a response into this field: that legacy
 * response field is always `ACTIVE`.
 */
export type UpdateFeatureFlagStalenessStatus =
  | typeof ACTIVE
  | typeof PERMANENT
  | UnparsedObject;
export const ACTIVE = "ACTIVE";
export const PERMANENT = "PERMANENT";
