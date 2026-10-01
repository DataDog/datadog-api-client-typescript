/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ObservabilityPipelineMetricEnrichmentTableMetricNameLookup } from "./ObservabilityPipelineMetricEnrichmentTableMetricNameLookup";
import { ObservabilityPipelineMetricEnrichmentTableTagLookup } from "./ObservabilityPipelineMetricEnrichmentTableTagLookup";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Specifies the source of the key value used for metric enrichment table lookups.
 * The lookup key can be either the metric name or a metric tag.
 */

export type ObservabilityPipelineMetricEnrichmentTableLookupSource =
  | ObservabilityPipelineMetricEnrichmentTableMetricNameLookup
  | ObservabilityPipelineMetricEnrichmentTableTagLookup
  | UnparsedObject;
