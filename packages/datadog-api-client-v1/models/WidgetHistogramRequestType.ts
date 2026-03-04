/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * Request type for distribution of point values for distribution metrics. Query space aggregator must be `histogram:<metric name>` for points distributions.
 */

export type WidgetHistogramRequestType = typeof HISTOGRAM | UnparsedObject;
export const HISTOGRAM = "histogram";
