import { UnparsedObject } from "@datadog/datadog-api-client";

import { SeverityModifierRuleSetAction } from "./SeverityModifierRuleSetAction";
import { SeverityModifierRuleShiftAction } from "./SeverityModifierRuleShiftAction";

/**
 * The action to take when a severity modifier rule matches a finding. This is a discriminated union on `type`: `set` assigns a fixed severity, while `shift` moves the severity up or down by one rank.
 *
 * A severity modifier rule's `rule.query` must not filter on `@severity` or on the `@severity_details.user_adjusted.*` namespace.
 *
 * Use `@severity_details.adjusted.value` instead, which reflects the severity before user-defined adjustments.
 */
export type SeverityModifierRuleAction =
  | SeverityModifierRuleSetAction
  | SeverityModifierRuleShiftAction
  | UnparsedObject;
