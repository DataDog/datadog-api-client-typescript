/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The progression strategy used by a progressive rollout.
 */

export type RolloutStrategy =
  | typeof UNIFORM_INTERVALS
  | typeof NO_ROLLOUT
  | UnparsedObject;
export const UNIFORM_INTERVALS = "UNIFORM_INTERVALS";
export const NO_ROLLOUT = "NO_ROLLOUT";
