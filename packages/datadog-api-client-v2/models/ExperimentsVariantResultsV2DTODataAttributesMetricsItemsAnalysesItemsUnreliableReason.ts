/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Reason that the statistical result is marked as unreliable.
 */

export type ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsUnreliableReason =

    | typeof CONTROL_DENOMINATOR_NEAR_ZERO
    | typeof TREATMENT_DENOMINATOR_NEAR_ZERO
    | typeof CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO
    | typeof CONTROL_MEAN_NEAR_ZERO
    | typeof ZERO_VARIANCE
    | typeof UNKNOWN
    | UnparsedObject;
export const CONTROL_DENOMINATOR_NEAR_ZERO = "CONTROL_DENOMINATOR_NEAR_ZERO";
export const TREATMENT_DENOMINATOR_NEAR_ZERO =
  "TREATMENT_DENOMINATOR_NEAR_ZERO";
export const CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO =
  "CONTROL_AND_TREATMENT_DENOMINATORS_NEAR_ZERO";
export const CONTROL_MEAN_NEAR_ZERO = "CONTROL_MEAN_NEAR_ZERO";
export const ZERO_VARIANCE = "ZERO_VARIANCE";
export const UNKNOWN = "UNKNOWN";
