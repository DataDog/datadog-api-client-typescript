/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Reason the diagnostic check could not be evaluated.
 */

export type ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsSkippedReason =

    | typeof NO_ASSIGNMENTS
    | typeof NO_DIMENSIONAL_DATA
    | typeof NO_METRIC_DATA
    | typeof ZERO_VARIANCE
    | UnparsedObject;
export const NO_ASSIGNMENTS = "NO_ASSIGNMENTS";
export const NO_DIMENSIONAL_DATA = "NO_DIMENSIONAL_DATA";
export const NO_METRIC_DATA = "NO_METRIC_DATA";
export const ZERO_VARIANCE = "ZERO_VARIANCE";
