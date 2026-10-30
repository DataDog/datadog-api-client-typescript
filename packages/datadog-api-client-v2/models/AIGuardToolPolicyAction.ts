/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The policy action for a tool named by the property. Tool policies override
 * the recommendation after evaluation; they do not skip evaluation.
 * Any BLOCK takes precedence over PASS and EVALUATE. The Supply Chain Firewall
 * is applied afterward and can still return DENY.
 */

export type AIGuardToolPolicyAction =
  | typeof PASS
  | typeof BLOCK
  | typeof EVALUATE
  | UnparsedObject;
export const PASS = "PASS";
export const BLOCK = "BLOCK";
export const EVALUATE = "EVALUATE";
