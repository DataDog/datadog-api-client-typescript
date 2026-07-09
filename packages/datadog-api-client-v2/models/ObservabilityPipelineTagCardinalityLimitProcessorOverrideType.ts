/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the override is applied. `limit_override` enforces a custom limit; `excluded` omits the metric or tag from cardinality tracking.
 */

export type ObservabilityPipelineTagCardinalityLimitProcessorOverrideType =
  | typeof LIMIT_OVERRIDE
  | typeof EXCLUDED
  | UnparsedObject;
export const LIMIT_OVERRIDE = "limit_override";
export const EXCLUDED = "excluded";
