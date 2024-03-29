/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The operation to perform
 */

export type SyntheticsPatchTestOperationName =
  | typeof ADD
  | typeof REMOVE
  | typeof REPLACE
  | typeof MOVE
  | typeof COPY
  | typeof TEST
  | UnparsedObject;
export const ADD = "add";
export const REMOVE = "remove";
export const REPLACE = "replace";
export const MOVE = "move";
export const COPY = "copy";
export const TEST = "test";
