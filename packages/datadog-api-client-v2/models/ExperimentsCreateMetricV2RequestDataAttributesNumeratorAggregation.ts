/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsDatadogMetricAggregationInput } from "./ExperimentsDatadogMetricAggregationInput";
import { ExperimentsWarehouseMetricAggregationInput } from "./ExperimentsWarehouseMetricAggregationInput";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Measure and calculation settings for a numerator or denominator aggregation. Supply exactly one non-null measure.
 */

export type ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation =

    | ExperimentsWarehouseMetricAggregationInput
    | ExperimentsDatadogMetricAggregationInput
    | UnparsedObject;
