/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */
import { ExperimentsCreateMetricNumeratorAttributes } from "./ExperimentsCreateMetricNumeratorAttributes";
import { ExperimentsCreateMetricPercentileAttributes } from "./ExperimentsCreateMetricPercentileAttributes";

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Configuration for the new metric. Supply either numerator_aggregation or percentile_aggregation. A denominator_aggregation requires numerator_aggregation. Omit unused aggregation fields; do not send them as null.
 */

export type ExperimentsCreateMetricV2RequestDataAttributes =
  | ExperimentsCreateMetricNumeratorAttributes
  | ExperimentsCreateMetricPercentileAttributes
  | UnparsedObject;
