/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The JSON:API type for severity modifier rules.
 */

export type SeverityModifierRuleType =
  | typeof SEVERITY_MODIFIER_RULES
  | UnparsedObject;
export const SEVERITY_MODIFIER_RULES = "severity_modifier_rules";
