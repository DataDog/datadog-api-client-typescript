/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Analysis plans resource type.
 */

export type ExperimentsAnalysisPlanWriteV2RequestDataType =
  | typeof ANALYSIS_PLANS
  | UnparsedObject;
export const ANALYSIS_PLANS = "analysis-plans";
