/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Current state of the diagnostic evaluation.
 */

export type ExperimentsExperimentDiagnosticsV2DTODataAttributesState =
  | typeof NOT_STARTED
  | typeof RUNNING
  | typeof COMPLETED
  | typeof FAILED
  | UnparsedObject;
export const NOT_STARTED = "NOT_STARTED";
export const RUNNING = "RUNNING";
export const COMPLETED = "COMPLETED";
export const FAILED = "FAILED";
