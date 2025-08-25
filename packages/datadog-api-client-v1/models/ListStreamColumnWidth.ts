/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Widget column width.
 */

export type ListStreamColumnWidth =
  | typeof AUTO
  | typeof COMPACT
  | typeof FULL
  | UnparsedObject;
export const AUTO = "auto";
export const COMPACT = "compact";
export const FULL = "full";
