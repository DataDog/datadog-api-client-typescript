/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How the delta is expressed: `absolute` (raw difference), `relative` (percentage), or `both`.
 */

export type QueryValueWidgetComparisonType =
  | typeof ABSOLUTE
  | typeof RELATIVE
  | typeof BOTH
  | UnparsedObject;
export const ABSOLUTE = "absolute";
export const RELATIVE = "relative";
export const BOTH = "both";
