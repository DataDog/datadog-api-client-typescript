/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Why the arm's estimate and interval are unavailable. Absent when they are available.
 */

export type ExperimentsBanditPosteriorUnavailableReason =
  | typeof NO_DATA
  | typeof INSUFFICIENT_DATA
  | typeof ZERO_VARIANCE
  | UnparsedObject;
export const NO_DATA = "no_data";
export const INSUFFICIENT_DATA = "insufficient_data";
export const ZERO_VARIANCE = "zero_variance";
