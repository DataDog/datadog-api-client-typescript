/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

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
