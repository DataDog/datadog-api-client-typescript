/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { SeverityModifierRuleSetAction } from "./SeverityModifierRuleSetAction";
import { SeverityModifierRuleShiftAction } from "./SeverityModifierRuleShiftAction";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
