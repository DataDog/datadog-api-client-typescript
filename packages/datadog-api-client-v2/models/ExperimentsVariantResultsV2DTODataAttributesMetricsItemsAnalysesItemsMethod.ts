/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Statistical method used to calculate this result.
 */

export type ExperimentsVariantResultsV2DTODataAttributesMetricsItemsAnalysesItemsMethod =

    | typeof FIXED_SAMPLE
    | typeof BAYESIAN
    | typeof SEQUENTIAL
    | typeof SEQUENTIAL_FIXED_HYBRID
    | typeof UNKNOWN
    | UnparsedObject;
export const FIXED_SAMPLE = "FIXED_SAMPLE";
export const BAYESIAN = "BAYESIAN";
export const SEQUENTIAL = "SEQUENTIAL";
export const SEQUENTIAL_FIXED_HYBRID = "SEQUENTIAL_FIXED_HYBRID";
export const UNKNOWN = "UNKNOWN";
