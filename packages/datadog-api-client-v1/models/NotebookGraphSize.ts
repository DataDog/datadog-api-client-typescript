/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The size of the graph.
 */

export type NotebookGraphSize =
  | typeof EXTRA_SMALL
  | typeof SMALL
  | typeof MEDIUM
  | typeof LARGE
  | typeof EXTRA_LARGE
  | UnparsedObject;
export const EXTRA_SMALL = "xs";
export const SMALL = "s";
export const MEDIUM = "m";
export const LARGE = "l";
export const EXTRA_LARGE = "xl";
