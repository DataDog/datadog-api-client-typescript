/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Recommendations scope. Defaults to `ccm`; use `experiment` for experimental recommendations or `*` for both.
 */

export type RecommendationsFilterRequestScope =
  | typeof CCM
  | typeof EXPERIMENT
  | typeof ALL
  | UnparsedObject;
export const CCM = "ccm";
export const EXPERIMENT = "experiment";
export const ALL = "*";
