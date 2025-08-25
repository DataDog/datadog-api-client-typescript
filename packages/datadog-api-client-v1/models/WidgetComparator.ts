/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Comparator to apply.
 */

export type WidgetComparator =
  | typeof EQUAL_TO
  | typeof GREATER_THAN
  | typeof GREATER_THAN_OR_EQUAL_TO
  | typeof LESS_THAN
  | typeof LESS_THAN_OR_EQUAL_TO
  | UnparsedObject;
export const EQUAL_TO = "=";
export const GREATER_THAN = ">";
export const GREATER_THAN_OR_EQUAL_TO = ">=";
export const LESS_THAN = "<";
export const LESS_THAN_OR_EQUAL_TO = "<=";
