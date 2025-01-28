/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Reason for muting a vulnerability
 */

export type MuteReason =
  | typeof DUPLICATE
  | typeof EXTERNAL_SOLUTION
  | typeof FALSE_POSITIVE
  | typeof INTERNAL_SOLUTION
  | typeof NO_FIX_AVAILABLE
  | typeof OTHER
  | typeof PENDING_FIX
  | typeof RISK_ACCEPTED
  | UnparsedObject;
export const DUPLICATE = "duplicate";
export const EXTERNAL_SOLUTION = "external_solution";
export const FALSE_POSITIVE = "false_positive";
export const INTERNAL_SOLUTION = "internal_solution";
export const NO_FIX_AVAILABLE = "no_fix_available";
export const OTHER = "other";
export const PENDING_FIX = "pending_fix";
export const RISK_ACCEPTED = "risk_accepted";
