import { UnparsedObject } from "@datadog/datadog-api-client";

import { ExperimentsMeasureComparisonFilterInput } from "./ExperimentsMeasureComparisonFilterInput";
import { ExperimentsMeasureNullFilterInput } from "./ExperimentsMeasureNullFilterInput";
import { ExperimentsMeasureRangeFilterInput } from "./ExperimentsMeasureRangeFilterInput";
import { ExperimentsPropertyFilterInput } from "./ExperimentsPropertyFilterInput";
import { ExperimentsPropertyNullFilterInput } from "./ExperimentsPropertyNullFilterInput";

/**
 * A property or measure comparison for a Warehouse numerator or denominator. Set exactly one target ID that is not blank. Measure comparisons require numeric measures and numeric values. BETWEEN bounds must be in ascending order.
 */
export type ExperimentsWarehouseFilterInput =
  | ExperimentsPropertyFilterInput
  | ExperimentsPropertyNullFilterInput
  | ExperimentsMeasureComparisonFilterInput
  | ExperimentsMeasureRangeFilterInput
  | ExperimentsMeasureNullFilterInput
  | UnparsedObject;
