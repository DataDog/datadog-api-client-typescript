/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * WARMUP serves the arms equally. ADAPTIVE serves the initial split or a split from a refresh. FALLBACK serves one variant after the bandit ends.
 */

export type ExperimentsBanditPolicyKind =
  | typeof WARMUP
  | typeof ADAPTIVE
  | typeof FALLBACK
  | UnparsedObject;
export const WARMUP = "WARMUP";
export const ADAPTIVE = "ADAPTIVE";
export const FALLBACK = "FALLBACK";
