/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { HttpFile } from "../../datadog-api-client-common/http/http";



import { UnparsedObject } from "../../datadog-api-client-common/util";


/**
 * A number of occurrences after which signals will be generated for values that weren't learned.
*/

export type SecurityMonitoringRuleNewValueOptionsLearningThreshold = typeof ZERO_OCCURRENCES| typeof ONE_OCCURRENCE | UnparsedObject;
export const ZERO_OCCURRENCES = 0;
export const ONE_OCCURRENCE = 1;