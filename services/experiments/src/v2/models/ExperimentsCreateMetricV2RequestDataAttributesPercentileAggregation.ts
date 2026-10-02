import { UnparsedObject } from "@datadog/datadog-api-client";

import { ExperimentsDatadogPercentileAggregationInput } from "./ExperimentsDatadogPercentileAggregationInput";
import { ExperimentsWarehousePercentileAggregationInput } from "./ExperimentsWarehousePercentileAggregationInput";

/**
 * Measure and percentile to calculate for the metric. Supply exactly one non-null measure.
 */
export type ExperimentsCreateMetricV2RequestDataAttributesPercentileAggregation =

    | ExperimentsWarehousePercentileAggregationInput
    | ExperimentsDatadogPercentileAggregationInput
    | UnparsedObject;
