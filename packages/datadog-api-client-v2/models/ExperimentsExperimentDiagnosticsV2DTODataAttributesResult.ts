/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Overall result of the experiment diagnostic checks.
 */

export type ExperimentsExperimentDiagnosticsV2DTODataAttributesResult =
  | typeof PASS
  | typeof FAIL
  | typeof WARN
  | typeof NO_DATA
  | UnparsedObject;
export const PASS = "PASS";
export const FAIL = "FAIL";
export const WARN = "WARN";
export const NO_DATA = "NO_DATA";
