/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Rule category. Omitted for custom rules.
 */

export type ArbitraryRuleResponseDataAttributesRuleCategory =
  | typeof CUSTOM
  | typeof AI_GATEWAY
  | UnparsedObject;
export const CUSTOM = "custom";
export const AI_GATEWAY = "ai_gateway";
