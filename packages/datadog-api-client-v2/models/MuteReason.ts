/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The reason for muting a security finding.
 */

export type MuteReason =
  | typeof DUPLICATE
  | typeof FALSE_POSITIVE
  | typeof NO_FIX
  | typeof OTHER
  | typeof PENDING_FIX
  | typeof RISK_ACCEPTED
  | UnparsedObject;
export const DUPLICATE = "duplicate";
export const FALSE_POSITIVE = "false_positive";
export const NO_FIX = "no_fix";
export const OTHER = "other";
export const PENDING_FIX = "pending_fix";
export const RISK_ACCEPTED = "risk_accepted";
