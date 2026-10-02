import { UnparsedObject } from "@datadog/datadog-api-client";

/**
 * Outcome of attempting to refresh one experiment.
 */
export type ExperimentsRefreshExperimentResultsBatchMetaV2DTOResultsItemsOutcome =

    | typeof TRIGGERED
    | typeof SKIPPED_ALREADY_RUNNING
    | typeof SKIPPED_NOT_EDITABLE
    | typeof SKIPPED_ORG_AT_CAPACITY
    | typeof FAILED
    | UnparsedObject;
export const TRIGGERED = "TRIGGERED";
export const SKIPPED_ALREADY_RUNNING = "SKIPPED_ALREADY_RUNNING";
export const SKIPPED_NOT_EDITABLE = "SKIPPED_NOT_EDITABLE";
export const SKIPPED_ORG_AT_CAPACITY = "SKIPPED_ORG_AT_CAPACITY";
export const FAILED = "FAILED";
