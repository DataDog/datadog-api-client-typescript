/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The destination type. Always `splunk_hec_metrics`.
 */

export type ObservabilityPipelineSplunkHecMetricsDestinationType =
  | typeof SPLUNK_HEC_METRICS
  | UnparsedObject;
export const SPLUNK_HEC_METRICS = "splunk_hec_metrics";
