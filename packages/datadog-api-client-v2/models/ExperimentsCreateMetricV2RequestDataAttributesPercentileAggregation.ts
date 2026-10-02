/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsDatadogPercentileAggregationInput } from "./ExperimentsDatadogPercentileAggregationInput";
import { ExperimentsWarehousePercentileAggregationInput } from "./ExperimentsWarehousePercentileAggregationInput";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Measure and percentile to calculate for the metric. Supply exactly one non-null measure.
 */

export type ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation =

    | ExperimentsWarehousePercentileAggregationInput
    | ExperimentsDatadogPercentileAggregationInput
    | UnparsedObject;
