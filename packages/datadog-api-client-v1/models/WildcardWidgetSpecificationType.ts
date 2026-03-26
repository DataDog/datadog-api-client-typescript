/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Type of specification used by the wildcard widget.
 */

export type WildcardWidgetSpecificationType =
  | typeof VEGA
  | typeof VEGA_LITE
  | UnparsedObject;
export const VEGA = "vega";
export const VEGA_LITE = "vega-lite";
