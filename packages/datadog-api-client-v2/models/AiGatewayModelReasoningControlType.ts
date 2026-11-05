/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Reasoning-control mechanism.
 */

export type AiGatewayModelReasoningControlType =
  | typeof TOGGLE
  | typeof EFFORT
  | typeof BUDGET_TOKENS
  | UnparsedObject;
export const TOGGLE = "toggle";
export const EFFORT = "effort";
export const BUDGET_TOKENS = "budget_tokens";
