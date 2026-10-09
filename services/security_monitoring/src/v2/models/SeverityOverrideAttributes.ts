import { UnparsedObject } from "@datadog/datadog-api-client";

import { SeverityOverrideClear } from "./SeverityOverrideClear";
import { SeverityOverrideSet } from "./SeverityOverrideSet";

/**
 * Severity override to apply to the findings.
 * Set `action` to `set` to apply a manual severity override with the given `value`.
 * Set `action` to `clear` to remove a manual severity override.
 */
export type SeverityOverrideAttributes =
  | SeverityOverrideSet
  | SeverityOverrideClear
  | UnparsedObject;
