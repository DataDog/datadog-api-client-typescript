/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Effect of a scoring factor on the indicator's threat score.
 */

export type IoCScoreEffect =
  | typeof RAISE_SCORE
  | typeof LOWER_SCORE
  | typeof NO_EFFECT
  | UnparsedObject;
export const RAISE_SCORE = "RAISE_SCORE";
export const LOWER_SCORE = "LOWER_SCORE";
export const NO_EFFECT = "NO_EFFECT";
