import { UnparsedObject } from "@datadog/datadog-api-client";

import { ExperimentsDatadogMetricAggregationInput } from "./ExperimentsDatadogMetricAggregationInput";
import { ExperimentsWarehouseMetricAggregationInput } from "./ExperimentsWarehouseMetricAggregationInput";

/**
 * Measure and calculation settings for a numerator or denominator aggregation. Supply exactly one non-null measure.
 */
export type ExperimentsCreateMetricV2RequestDataAttributesNumeratorAggregation =

    | ExperimentsWarehouseMetricAggregationInput
    | ExperimentsDatadogMetricAggregationInput
    | UnparsedObject;
