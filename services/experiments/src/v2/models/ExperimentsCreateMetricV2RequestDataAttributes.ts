import { UnparsedObject } from "@datadog/datadog-api-client";

import { ExperimentsCreateMetricNumeratorAttributes } from "./ExperimentsCreateMetricNumeratorAttributes";
import { ExperimentsCreateMetricPercentileAttributes } from "./ExperimentsCreateMetricPercentileAttributes";

/**
 * Configuration for the new metric. Supply either numerator_aggregation or percentile_aggregation. A denominator_aggregation requires numerator_aggregation. Omit unused aggregation fields; do not send them as null.
 */
export type ExperimentsCreateMetricV2RequestDataAttributes =
  | ExperimentsCreateMetricNumeratorAttributes
  | ExperimentsCreateMetricPercentileAttributes
  | UnparsedObject;
