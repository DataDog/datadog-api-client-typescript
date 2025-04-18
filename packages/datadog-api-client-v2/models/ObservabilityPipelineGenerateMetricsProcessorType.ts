/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The processor type. Always `generate_datadog_metrics`.
 */

export type ObservabilityPipelineGenerateMetricsProcessorType =
  | typeof GENERATE_DATADOG_METRICS
  | UnparsedObject;
export const GENERATE_DATADOG_METRICS = "generate_datadog_metrics";
