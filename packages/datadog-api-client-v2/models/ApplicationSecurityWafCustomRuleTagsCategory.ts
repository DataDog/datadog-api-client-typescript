/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The category of the WAF Rule, can be either `business_logic`, `attack_attempt` or `security_response`.
 */

export type ApplicationSecurityWafCustomRuleTagsCategory =
  | typeof ATTACK_ATTEMPT
  | typeof BUSINESS_LOGIC
  | typeof SECURITY_RESPONSE
  | UnparsedObject;
export const ATTACK_ATTEMPT = "attack_attempt";
export const BUSINESS_LOGIC = "business_logic";
export const SECURITY_RESPONSE = "security_response";
