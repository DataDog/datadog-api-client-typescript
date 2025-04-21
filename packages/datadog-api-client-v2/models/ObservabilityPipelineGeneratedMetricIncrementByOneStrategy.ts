/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Increments the metric by 1 for each matching event.
 */

export type ObservabilityPipelineGeneratedMetricIncrementByOneStrategy =
  | typeof INCREMENT_BY_ONE
  | UnparsedObject;
export const INCREMENT_BY_ONE = "increment_by_one";
