/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The type of code edit to apply when fixing a violation.
 */

export type AnalysisEditType =
  | typeof ADD
  | typeof UPDATE
  | typeof REMOVE
  | UnparsedObject;
export const ADD = "ADD";
export const UPDATE = "UPDATE";
export const REMOVE = "REMOVE";
