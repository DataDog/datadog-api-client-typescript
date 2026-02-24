/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The JSON:API type for default rules.
 */

export type DefaultRuleType = typeof DEFAULT_RULE | UnparsedObject;
export const DEFAULT_RULE = "default-rule";
