/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Statistical method used to calculate the experiment results.
 */

export type ExperimentsAnalysisPlanV2DTODataAttributesConfidenceIntervalMethod =

    | typeof SEQUENTIAL
    | typeof FIXEDSAMPLE
    | typeof BAYESIAN
    | typeof SEQUENTIALFIXEDHYBRID
    | UnparsedObject;
export const SEQUENTIAL = "Sequential";
export const FIXEDSAMPLE = "FixedSample";
export const BAYESIAN = "Bayesian";
export const SEQUENTIALFIXEDHYBRID = "SequentialFixedHybrid";
