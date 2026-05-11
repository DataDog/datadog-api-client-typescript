/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Ruleset status resource type.
 */

export type RulesetStatusRespDataType = typeof RULESET_STATUS | UnparsedObject;
export const RULESET_STATUS = "ruleset_status";
