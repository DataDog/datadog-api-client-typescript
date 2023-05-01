/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The reason why this finding is muted.
 */

export type FindingMuteReason =
  | typeof ACCEPTED_RISK
  | typeof PENDING_FIX
  | typeof FALSE_POSITIVE
  | typeof OTHER
  | UnparsedObject;
export const ACCEPTED_RISK = "ACCEPTED_RISK";
export const PENDING_FIX = "PENDING_FIX";
export const FALSE_POSITIVE = "FALSE_POSITIVE";
export const OTHER = "OTHER";
