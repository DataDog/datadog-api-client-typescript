/**
 * Unless explicitly stated otherwise all files in this repository are licensed under the Apache-2.0 License.
 * This product includes software developed at Datadog (https://www.datadoghq.com/).
 * Copyright 2020-Present Datadog, Inc.
 */

import { UnparsedObject } from "../../datadog-api-client-common/util";

/**
 * The metric metadata resource type.
 */

export type MetricMetadataType = typeof METRIC_METADATA | UnparsedObject;
export const METRIC_METADATA = "metric_metadata";
