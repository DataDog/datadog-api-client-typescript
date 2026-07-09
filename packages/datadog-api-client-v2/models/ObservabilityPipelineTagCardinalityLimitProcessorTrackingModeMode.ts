/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The cardinality tracking algorithm to use.
 */

export type ObservabilityPipelineTagCardinalityLimitProcessorTrackingModeMode =
  | typeof EXACT_FINGERPRINT
  | typeof PROBABILISTIC
  | UnparsedObject;
export const EXACT_FINGERPRINT = "exact_fingerprint";
export const PROBABILISTIC = "probabilistic";
