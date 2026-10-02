import { UnparsedObject } from "@datadog/datadog-api-client";

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
