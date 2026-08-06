/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Whether an increase in the insight's value is good, bad, or neutral.
 */

export type GovernanceInsightDirectionality =
  | typeof NEUTRAL
  | typeof INCREASE_BETTER
  | typeof DECREASE_BETTER
  | UnparsedObject;
export const NEUTRAL = "neutral";
export const INCREASE_BETTER = "increase_better";
export const DECREASE_BETTER = "decrease_better";
