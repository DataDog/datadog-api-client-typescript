/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Size of the widget.
 */

export type WidgetSizeFormat =
  | typeof SMALL
  | typeof MEDIUM
  | typeof LARGE
  | UnparsedObject;
export const SMALL = "small";
export const MEDIUM = "medium";
export const LARGE = "large";
