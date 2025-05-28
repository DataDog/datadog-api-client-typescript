/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Operator to use for the WAF Condition.
*/

export type ApplicationSecurityWafCustomRuleConditionOperator = typeof MATCH_REGEX| typeof NOT_MATCH_REGEX| typeof PHRASE_MATCH| typeof NOT_PHRASE_MATCH| typeof IS_XSS| typeof IS_SQLI| typeof EXACT_MATCH| typeof NOT_EXACT_MATCH| typeof IP_MATCH| typeof NOT_IP_MATCH| typeof CAPTURE_DATA | UnparsedObject;
export const MATCH_REGEX = 'match_regex';
export const NOT_MATCH_REGEX = '!match_regex';
export const PHRASE_MATCH = 'phrase_match';
export const NOT_PHRASE_MATCH = '!phrase_match';
export const IS_XSS = 'is_xss';
export const IS_SQLI = 'is_sqli';
export const EXACT_MATCH = 'exact_match';
export const NOT_EXACT_MATCH = '!exact_match';
export const IP_MATCH = 'ip_match';
export const NOT_IP_MATCH = '!ip_match';
export const CAPTURE_DATA = 'capture_data';