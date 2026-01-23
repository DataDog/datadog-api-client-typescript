/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * How to order series in timeseries visualizations.
 * - `tags`: Order series alphabetically by tag name (default behavior)
 * - `values`: Order series by their current metric values (typically descending)
 */

export type WidgetStyleOrderBy = typeof TAGS | typeof VALUES | UnparsedObject;
export const TAGS = "tags";
export const VALUES = "values";
