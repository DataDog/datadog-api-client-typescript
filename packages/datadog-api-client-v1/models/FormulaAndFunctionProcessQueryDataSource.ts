/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Data sources that rely on the process backend.
 */

export type FormulaAndFunctionProcessQueryDataSource =
  | typeof PROCESS
  | typeof CONTAINER
  | UnparsedObject;
export const PROCESS = "process";
export const CONTAINER = "container";
