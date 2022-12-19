/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Amount of log lines to display
 */

export type WidgetMessageDisplay =
  | typeof INLINE
  | typeof EXPANDED_MEDIUM
  | typeof EXPANDED_LARGE
  | UnparsedObject;
export const INLINE = "inline";
export const EXPANDED_MEDIUM = "expanded-md";
export const EXPANDED_LARGE = "expanded-lg";
