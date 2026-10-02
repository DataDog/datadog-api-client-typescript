/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsMeasureComparisonFilterInput } from "./ExperimentsMeasureComparisonFilterInput";
import { ExperimentsMeasureNullFilterInput } from "./ExperimentsMeasureNullFilterInput";
import { ExperimentsMeasureRangeFilterInput } from "./ExperimentsMeasureRangeFilterInput";
import { ExperimentsPropertyFilterInput } from "./ExperimentsPropertyFilterInput";
import { ExperimentsPropertyNullFilterInput } from "./ExperimentsPropertyNullFilterInput";

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
