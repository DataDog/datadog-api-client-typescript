/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Outcome of an individual diagnostic check.
 */

export type ExperimentsExperimentDiagnosticsV2DTODataAttributesDiagnosticsItemsStatus =

    | typeof PASS
    | typeof FAIL
    | typeof WARN
    | typeof ERROR
    | typeof SKIPPED
    | UnparsedObject;
export const PASS = "PASS";
export const FAIL = "FAIL";
export const WARN = "WARN";
export const ERROR = "ERROR";
export const SKIPPED = "SKIPPED";
