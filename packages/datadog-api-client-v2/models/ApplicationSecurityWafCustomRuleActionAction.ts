/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * Override the default action to take when the WAF custom rule would block.
*/

export type ApplicationSecurityWafCustomRuleActionAction = typeof REDIRECT_REQUEST| typeof BLOCK_REQUEST | UnparsedObject;
export const REDIRECT_REQUEST = 'redirect_request';
export const BLOCK_REQUEST = 'block_request';